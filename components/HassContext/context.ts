import { HassEntities, HassEntity } from 'home-assistant-js-websocket';
import { createContext } from 'react';

interface iContext {
  entities: Array<HassEntity>;
  services: Array<any>;
}
const HASSContext = createContext<iContext>();

export default HASSContext;
