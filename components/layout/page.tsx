import { FunctionComponent } from 'react';
import Header from './header';
import Nav from './nav';

const Layout: FunctionComponent = ({ children }) => (
  <div className='grid grid-cols-24 min-h-screen'>
    <Nav />
    <main className='col-start-3 col-span-full bg-gray-900 h-full flex flex-col'>
      <Header />
      <div className='content-area flex-grow'>{children}</div>
    </main>
  </div>
);

export default Layout;
