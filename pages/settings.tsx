import { useCookie } from 'react-use';
import { useContext, useState } from 'react';
import HASSContext from '../components/HassContext/context';

const SettingsPage = () => {
  const context = useContext(HASSContext);
  const [value, updateCookie] = useCookie('settings');
  const settings = value && JSON.parse(value);

  const [lat, setLat] = useState(settings?.lat || process.env.NEXT_PUBLIC_LAT);
  const [lon, setLon] = useState(settings?.lon || process.env.NEXT_PUBLIC_LON);
  const [geoLocation, setGeoLocation] = useState(
    settings?.geoLocation || process.env.NEXT_PUBLIC_LOCATION
  );
  const [roonServer, setRoonServer] = useState(
    settings?.roonServer || process.env.NEXT_PUBLIC_ROON_SERVER
  );
  const [hassServer, setHomeAssistantServer] = useState(
    settings?.hassServer || process.env.NEXT_PUBLIC_HASS_URL
  );
  const [hassEntities, setHassEntities] = useState(settings?.hassEntities);

  const saveStateToCookie = () => {
    updateCookie(
      JSON.stringify({
        lat,
        lon,
        geoLocation,
        roonServer,
        hassServer,
        hassEntities,
      })
    );
  };

  const entities = Object.values(context.entities)
    .map((entity) => ({
      value: entity?.entity_id,
      name: entity?.attributes?.friendly_name,
    }))
    .filter((entity) => {
      const type = entity.value?.split('.')[0];
      return (
        entity.name !== undefined && (type === 'switch' || type === `light`)
      );
    });

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
          <label className='text-gray-100 text-3xl' htmlFor='entities'>
            Entities
          </label>
          <br />
          <select
            name='entities'
            className='text-3xl'
            multiple
            onChange={(e) => {
              setHassEntities(
                Array.from(e.target.selectedOptions).map(({ value }) => value)
              );
            }}
          >
            {entities.map((entity) => (
              <option value={entity.value} key={entity.value}>
                {entity.name}
              </option>
            ))}
          </select>
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
