import { NextPage } from 'next';
import { useEffect } from 'react';
import Button from '../components/elements/button';

const HassPage: NextPage = () => {
  useEffect(() => {
    async function getState() {
      const response = await fetch('http://10.19.136.98:8123/api/states', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASS_TOKEN}`,
          'Content-Type': `application/json`,
        },
      });
      console.log(response);
    }

    //getState();
  });

  return (
    <div className='grid grid-cols-4 gap-5 m-4'>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default HassPage;
