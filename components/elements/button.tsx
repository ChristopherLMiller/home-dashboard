import { FunctionComponent, useContext } from 'react';
import { useCookie } from 'react-use';
import HASSContext from '../HassContext/context';

interface iButton {
  entityName: string;
  type: string;
}

const Button: FunctionComponent<iButton> = ({ entityName, type }) => {
  const entities = useContext(HASSContext);
  const [cookie] = useCookie('settings');
  const entity = entities[entityName];
  console.log(entity);

  return (
    <div className='bg-gray-800 rounded-t-xl'>
      {type === 'light' && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`fill-current ${
            entity?.state === 'on' ? `text-yellow-600` : `text-gray-100`
          } w-full h-full`}
          viewBox='0 0 20 20'
        >
          <path d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' />
        </svg>
      )}
      {type === 'switch' && (
        <svg
          className={`fill-current ${
            entity?.state === 'on' ? `text-yellow-600` : `text-gray-100`
          } w-full h-full`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
            clipRule='evenodd'
          />
        </svg>
      )}
      <p className='bg-gray-800 rounded-b-xl text-gray-100 text-center text-3xl'>
        {entity?.attributes?.friendly_name}
      </p>
    </div>
  );
};

export default Button;
