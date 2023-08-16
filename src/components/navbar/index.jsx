import React from 'react';
import Logo from './sections/Logo';
import Search from './sections/Search';
import Navigation from './sections/Navigation';
import Account from './sections/Account';

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between space-x-8">
        <div className="flex flex-1 space-x-6">
          <Logo />
          <Search />
        </div>
        <Navigation />
        <Account />
      </div>
    </nav>
  );
}

export default Navbar