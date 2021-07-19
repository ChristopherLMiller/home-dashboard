import {
  subscribeEntities,
  subscribeServices,
} from 'home-assistant-js-websocket';
import { FC, useEffect, useState } from 'react';
import { HASSConnection } from '../../src/lib/hass';
import HASSContext from './context';

const HASSContextProvider: FC = (props) => {
  const [entities, setEntities] = useState({});

  useEffect(() => {
    async function getConnection() {
      const conn = await HASSConnection();
      //subscribeServices(conn, (service) => console.log(service));
      subscribeEntities(conn, (subEntities) => setEntities(subEntities));
    }

    getConnection();
  }, []);

  return (
    <HASSContext.Provider value={entities}>
      {props.children}
    </HASSContext.Provider>
  );
};

export default HASSContextProvider;
