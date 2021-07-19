import { NextPage } from 'next';
import Button from '../components/elements/button';

const HassPage: NextPage = () => {
  return (
    <div className='grid grid-cols-4 gap-5 m-4'>
      <Button entityName='light.model_desk' type='light' />
      <Button entityName='light.overhead_3' type='light' />
      <Button entityName='switch.air_compressor' type='switch' />
    </div>
  );
};

export default HassPage;
