import React from 'react';
import Navs from './Navs';
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <>
      <Navs />
      <Outlet />
    </>
  );
}

export default Layout;
