import { format } from 'date-fns';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useInterval } from '../../src/useInterval';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const { isLoading, error, data } = useQuery('CURRENT_WEATHER', () =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${process.env.NEXT_PUBLIC_LOCATION}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
    ).then((res) => res.json())
  );
  useInterval(() => {
    setCurrentDateTime(new Date());
  }, 60 * 1000);

  if (error) {
    console.log(error);
  }
  return (
    <header className='bg-gray-400 pr-3'>
      <p className='text-gray-900 text-right uppercase text-3xl p-2'>
        {!isLoading && Math.round(data?.main?.feels_like)}&#176; |{' '}
        {format(currentDateTime, 'LLL do')} | {format(currentDateTime, 'H:mm')}
      </p>
    </header>
  );
};

export default Header;
