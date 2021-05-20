import Link from 'next/link';
import {useRouter} from 'next/router';
import { FunctionComponent } from 'react';

const Nav:FunctionComponent = () => {
  const router = useRouter();
  const activePath = router.route;
  
  return (
    <aside className='bg-gray-700 col-span-2'>
      <nav>
        <Link href="/roon">
          <a>
            <img className={`p-3 ${activePath === "/roon" ? 'bg-green-900' : ''}`} src='/roon.svg' width='100%' height='100%' />
          </a>
        </Link>
        <Link href="/hass">
          <a>
          <img className={`p-3 ${activePath === "/hass" ? 'bg-green-900' : ''}`} src='/hass.svg' width='100%' height='100%' />
          </a>
          </Link>
        <Link href="/weather">
          <a>
            <img className={`p-3 ${activePath === "/weather" ? 'bg-green-900' : ''}`} src="/weather.svg" width="100%" height="100%" />
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <img className={`p-3 ${activePath === "/settings" ? 'bg-green-900' : ''}`} src="/settings.svg" width="100%" height="100%" />
          </a>
        </Link>
      </nav>
    </aside>
)
  };

export default Nav;