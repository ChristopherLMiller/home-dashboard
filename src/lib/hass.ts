import {
  createConnection,
  createLongLivedTokenAuth,
  entitiesColl,
  ERR_HASS_HOST_REQUIRED,
  getAuth,
  subscribeEntities,
} from 'home-assistant-js-websocket';

export async function HASSConnection() {
  const auth = createLongLivedTokenAuth(
    'https://home.millerresidence.site',
    process.env.NEXT_PUBLIC_HASS_TOKEN as string
  );

  const connection = await createConnection({ auth });
  return connection;
}
