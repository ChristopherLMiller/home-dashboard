import { HassEntities, HassServices } from 'home-assistant-js-websocket';
import { createContext } from 'react';

interface iContext {
  entities: HassEntities;
  services: HassServices;
}
const HASSContext = createContext<iContext>({ entities: {}, services: {} });

export default HASSContext;
