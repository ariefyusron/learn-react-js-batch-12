import { Outlet } from 'react-router-dom';

import Header from './components/header';

const Home = () => (
  <>
    <Header title='Header' />
    <Outlet />
  </>
);

export default Home;