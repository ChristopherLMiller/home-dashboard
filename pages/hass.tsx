import { NextPage } from 'next';
import Button from '../components/elements/button';

const HassPage: NextPage = () => {
  return (
    <div className='grid grid-cols-4 gap-5 m-4'>
      <Button entity='light.model_desk' type='light' />
      <Button entity='light.overhead_3' type='light' />
      <Button entity='switch.air_compressor' type='switch' />
    </div>
  );
};

export default HassPage;
