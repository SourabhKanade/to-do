import React from 'react';
import './Header.css';
import DarkModeButton from './DarkModeButton';

const Header = (props) => {
  return (
    <>
      <header className='header' >
        <h1>Wecome</h1>
        <DarkModeButton style={props.onStyle} onClick={props.onChangeHandler}/>
        </header>
    </>
  )
};

export default Header;