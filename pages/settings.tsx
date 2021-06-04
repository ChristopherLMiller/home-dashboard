import { useLocalStorage } from 'react-use';

const SettingsPage = () => {
  const [lat, setLat] = useLocalStorage('lat', process.env.NEXT_PUBLIC_LAT);
  const [lon, setLon] = useLocalStorage('lon', process.env.NEXT_PUBLIC_LON);
  const [location, setLocation] = useLocalStorage(
    'location',
    process.env.NEXT_PUBLIC_LOCATION
  );
  const [roonServer, setRoonServer] = useLocalStorage(
    'roonServer',
    'http://localhost'
  );

  return (
    <div className='p-10'>
      <h2 className='text-gray-100 text-4xl'>Settings</h2>
      <div className='grid grid-cols-2 gap-6'>
        <fieldset className='border-gray-100 border-2 p-2 flex'>
          <legend className='text-gray-100'>GPS Location</legend>
          <label className='text-gray-100 text-3xl' htmlFor='latitude'>
            Latitude
          </label>
          <input
            className='text-3xl'
            type='text'
            name='latitude'
            placeholder={lat}
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <label className='text-gray-100 text-3xl' htmlFor='longitude'>
            Longitude
          </label>
          <input
            className='text-3xl'
            type='text'
            name='longitude'
            placeholder={lon}
            value={lon}
            onChange={(e) => setLon(e.target.value)}
          />
          <label className='text-gray-100 text-3xl' htmlFor='location'>
            Location
          </label>
          <input
            className='text-3xl'
            type='text'
            name='location'
            placeholder='city,state,country'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </fieldset>

        <fieldset className='border-gray-100 border-2 p-2 flex min-content'>
          <legend className='text-gray-100'>Roon Server</legend>
          <label className='text-gray-100 text-3xl' htmlFor='roon'>
            Hostname
          </label>
          <input
            className='text-3xl'
            type='text'
            name='roon'
            placeholder={roonServer}
            value={roonServer}
            onChange={(e) => setRoonServer(e.target.value)}
          />
        </fieldset>
      </div>
    </div>
  );
};

export default SettingsPage;
