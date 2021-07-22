import { HassEntities } from 'home-assistant-js-websocket';
import { NextPage } from 'next';
import { useCookie } from 'react-use';
import Button from '../components/elements/button';

const HassPage: NextPage = () => {
  const [cookie] = useCookie('settings');
  const settings = cookie && JSON.parse(cookie);
  const entities = settings?.hassEntities as Array<string>;

  return (
    <div className='grid grid-cols-4 gap-5 m-4'>
      {entities?.map((entity) => (
        <Button entityName={entity} key={entity} />
      ))}
    </div>
  );
};

export default HassPage;
