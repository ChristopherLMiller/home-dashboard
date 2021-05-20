import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useInterval } from '../../src/useInterval';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentTemp, setCurrentTemp] = useState(0);
  useInterval(() => {
    setCurrentDateTime(new Date());
  }, 1000);

  useEffect(() => {
    // async function to fetch the weather duh
    async function getWeather() {
      console.log('fetching weather');
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${process.env.NEXT_PUBLIC_LOCATION}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY}`
      );
      const data = await response.json();
      setCurrentTemp(Math.round(data.main.feels_like));
    }

    // need to execute it
    getWeather();

    // now set a timer for every 60 minutes to update the weather
    const interval = setInterval(() => {
      getWeather();
    }, 60 * 60 * 1000);

    // and we must clear it when leaving, for perf reasons
    return () => clearInterval(interval);
  }, []);

  return (
    <header className='bg-gray-400 pr-3'>
      <p className='text-gray-900 text-right uppercase text-3xl p-2'>
        {currentTemp}º | {format(currentDateTime, 'LLL do')} |{' '}
        {format(currentDateTime, 'H:mm:ss')}
      </p>
    </header>
  );
};

export default Header;
