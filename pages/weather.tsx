import { format } from 'date-fns';
import { NextPage } from 'next';
import { useQuery } from 'react-query';
import { useCookie } from 'react-use';
import { degTocard } from '../src/windDirection';

const WeatherPage: NextPage = () => {
  const [cookieValue] = useCookie('settings');

  const settings = cookieValue && JSON.parse(cookieValue);
  const { isLoading, data, error } = useQuery(
    `FORECAST`,
    async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${settings?.lat}&lon=${settings?.lon}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
      );
      const data = await response.json();
      return data;
    },
    {
      enabled: cookieValue !== null,
      refetchIntervalInBackground: false,
      refetchInterval: 60 * 60 * 1000,
    }
  );

  if (error) {
    console.log(error);
  }
  return (
    <div className='p-4'>
      {!isLoading && !error && (
        <div className='current-weather grid grid-cols-3'>
          <div>
            <img
              className='w-double'
              src={`http://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}@4x.png`}
              alt={data?.current?.weather[0]?.description}
            />
          </div>

          <div className='col-span-2 p-4 self-center'>
            <p className='text-gray-500 uppercase text-2xl'>
              {settings?.geoLocation}
            </p>
            <div className='flex justify-between'>
              <p className='text-gray-100 uppercase text-5xl'>
                {data?.current?.weather[0]?.description}
              </p>
              <p className='text-gray-100 uppercase text-5xl'>
                {Math.round(data?.current?.feels_like)}&#176;F
              </p>
            </div>
            <p className='text-gray-300 uppercase text-4xl'>
              Humidity: {Math.round(data?.current?.humidity)}&#37;
            </p>
            <p className='text-gray-300 uppercase text-4xl'>
              Winds:{' '}
              {data?.current?.wind_speed
                ? `${Math.round(data?.current?.wind_speed)}${
                    data?.current?.wind_gust > 0
                      ? `G${Math.round(data?.current?.wind_gust)}`
                      : ''
                  }MPH ${degTocard(data?.current?.wind_deg)}`
                : 'Calm'}
            </p>
            <p className='text-gray-400 uppercase text-3xl'>
              Sunrise:{' '}
              {data?.current?.sunrise &&
                format(
                  new Date(data?.current?.sunrise * 1000),
                  'h:mmaaaaa'
                )}{' '}
              Sunset:{' '}
              {data?.current?.sunset &&
                format(new Date(data?.current?.sunset * 1000), 'h:mmaaaaa')}
            </p>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className='futurecast grid grid-cols-7 justify-items-center'>
          {data?.daily.slice(1).map((day: any) => (
            <div id={day.dt} className='bg-indigo-200 rounded-md p-2'>
              <p className='text-gray-900 text-2xl text-center uppercase'>
                {format(new Date(day.dt * 1000), 'ccc')}
              </p>
              <img
                className=''
                src={`http://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png`}
                alt={data?.current?.weather[0]?.description}
              />
              <p className='text-gray-900 text-center text-2xl'>
                H{Math.round(day.temp.max)} | L{Math.round(day.temp.min)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
