import React from 'react';
import logo from './Images/logo.png';

const Header = () => {
  return (
    <>
        <div className='header'>
            <img src={logo} alt="logo" style={{verticalAlign: "middle", marginRight: "20px",}}/>
            <h1 className='heading'>Keep Notes</h1>
        </div>
    </>
  );
};

export default Header;
