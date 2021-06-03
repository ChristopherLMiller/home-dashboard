import {
  createConnection,
  createLongLivedTokenAuth,
  subscribeEntities,
} from 'home-assistant-js-websocket';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Button from '../components/elements/button';

const hassUrl = process.env.NEXT_PUBLIC_HASS_URL as string;
const hassToken = process.env.NEXT_PUBLIC_HASS_TOKEN as string;

const HassPage: NextPage = () => {
  useEffect(() => {
    async function connect() {
      let auth;
      try {
        auth = createLongLivedTokenAuth(hassUrl, hassToken);
      } catch (error) {
        console.log(`Connection error: ${error}`);
        return;
      }
      const connection = await createConnection({ auth });
      subscribeEntities(connection, (ent) => console.log(ent));
    }
  });

  return (
    <div className='grid grid-cols-4 gap-5 m-4'>
      <Button entity='light.model_desk' type='light' />
      <Button entity='light.overhead_3' type='light' />
      <Button entity='switch.air_compressor' type='switch' />
    </div>
  );
};

export default HassPage;
