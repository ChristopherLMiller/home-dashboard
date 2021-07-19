import { useCookie } from 'react-use';

const RoonPage = () => {
  const [cookie] = useCookie('settings');
  const settings = cookie && JSON.parse(cookie);
  if (settings?.roonServer)
    return (
      <iframe
        src={`${settings?.roonServer}:9100/display`}
        width='100%'
        height='100%'
      />
    );
  else return null;
};

export default RoonPage;
