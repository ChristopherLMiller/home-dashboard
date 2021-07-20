import {
  Connection,
  subscribeEntities,
  subscribeServices,
} from 'home-assistant-js-websocket';
import { FC, useEffect, useState } from 'react';
import { HASSConnection } from '../../src/lib/hass';
import HASSContext from './context';

const HASSContextProvider: FC = (props) => {
  const [entities, setEntities] = useState({});
  const [services, setServices] = useState({});
  const [connection, setConnection] = useState<Connection>();

  useEffect(() => {
    async function getConnection() {
      const conn = await HASSConnection();
      setConnection(conn);
      subscribeServices(conn, (subServices) => setServices(subServices));
      subscribeEntities(conn, (subEntities) => setEntities(subEntities));
    }

    getConnection();
  }, []);

  const values = {
    entities,
    services,
  };

  return (
    <HASSContext.Provider value={values}>{props.children}</HASSContext.Provider>
  );
};

export default HASSContextProvider;
