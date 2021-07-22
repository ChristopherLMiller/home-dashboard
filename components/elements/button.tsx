import { FunctionComponent, useContext } from 'react';
import { useCookie } from 'react-use';
import HASSContext from '../HassContext/context';
import Light from './light';
import Switch from './switch';

interface iButton {
  entityName: string;
}

const Button: FunctionComponent<iButton> = ({ entityName }) => {
  const [cookie] = useCookie('settings');
  const context = useContext(HASSContext);

  // Extract the entity and set some variables based on it
  const entity = context.entities[entityName];
  const entityType = entity?.entity_id.split('.')[0];
  const entityState = entity?.state === 'on' ? true : false;

  // Get the hass server
  const cookies = cookie && JSON.parse(cookie);
  const hassServer = cookies?.hassServer || process.env.NEXT_PUBLIC_HASS_SERVER;

  async function handleClick() {
    try {
      const response = await fetch(
        `${hassServer}/api/services/${entityType}/toggle`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ entity_id: entityName }),
        }
      );
      const data = await response.json();
    } catch (error) {
      // TODO:  Add some sort of notification
      console.log(error);
    }
  }

  return (
    <div className='bg-gray-800 rounded-t-xl' onClick={() => handleClick()}>
      {entityType === 'light' && <Light state={entityState} />}
      {entityType === 'switch' && <Switch state={entityState} />}
      <p className='bg-gray-800 rounded-b-xl text-gray-100 text-center text-3xl'>
        {entity?.attributes?.friendly_name}
      </p>
    </div>
  );
};

export default Button;
