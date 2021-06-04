import { useLocalStorage } from 'react-use';

const RoonPage = () => {
  const [roonServer] = useLocalStorage('roonServer');
  if (roonServer)
    return (
      <iframe src={`${roonServer}:9100/display`} width='100%' height='100%' />
    );
  else return null;
};

export default RoonPage;
