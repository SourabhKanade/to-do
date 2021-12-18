import React, { useState } from "react";
import "./DarkModeButton.css";

const DarkModeButton = (props) => {
  
  // const Check = () => {
  //   console.log('toggle was clicked'); 
  //    // props.onChangeHandler
  // }
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round" onClick={props.onClick} style={props.style}/>
          </label>
        </div>
        <span style={{ color: darkMode ? "black" : "grey" }}>☽</span>
      </div>
    </div>
  );
}

export default DarkModeButton;