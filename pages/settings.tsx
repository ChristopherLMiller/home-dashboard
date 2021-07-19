import { useCookie } from 'react-use';
import { useState } from 'react';

const SettingsPage = () => {
  const [value, updateCookie] = useCookie('settings');
  const settings = value && JSON.parse(value);

  const [lat, setLat] = useState(settings?.lat);
  const [lon, setLon] = useState(settings?.lon);
  const [geoLocation, setGeoLocation] = useState(settings?.geoLocation);
  const [roonServer, setRoonServer] = useState(settings?.roonServer);
  const [hassServer, setHomeAssistantServer] = useState(settings?.hassServer);

  const saveStateToCookie = () => {
    updateCookie(
      JSON.stringify({ lat, lon, geoLocation, roonServer, hassServer })
    );
  };

  return (
    <div className='p-10'>
      <h2 className='text-gray-100 text-4xl'>Settings</h2>
      <div className='grid grid-cols-2 gap-6'>
        <fieldset className='border-gray-100 border-2 p-2 flex flex-col'>
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
            value={geoLocation}
            onChange={(e) => setGeoLocation(e.target.value)}
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
        <fieldset className='border-gray-100 border-2 p-2 flex min-content'>
          <legend className='text-gray-100'>Home Assistant</legend>
          <label className='text-gray-100 text-3xl' htmlFor='hass'>
            Hostname
          </label>
          <input
            className='text-3xl'
            type='text'
            name='hass'
            placeholder={hassServer}
            value={hassServer}
            onChange={(e) => setHomeAssistantServer(e.target.value)}
          />
        </fieldset>
      </div>
      <button
        className='button border-2 text-gray-100 text-2xl p-3 mt-4'
        onClick={() => saveStateToCookie()}
      >
        Save
      </button>
    </div>
  );
};

export default SettingsPage;
