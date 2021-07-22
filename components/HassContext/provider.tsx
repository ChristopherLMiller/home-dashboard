import {
  HassEntities,
  HassServices,
  subscribeEntities,
  subscribeServices,
} from 'home-assistant-js-websocket';
import { FC, useEffect, useState } from 'react';
import { HASSConnection } from '../../src/lib/hass';
import HASSContext from './context';

const HASSContextProvider: FC = (props) => {
  const [entities, setEntities] = useState<HassEntities>({});
  const [services, setServices] = useState<HassServices>({});

  useEffect(() => {
    async function getConnection() {
      const conn = await HASSConnection();
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
