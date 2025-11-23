// AppWrap.js
import React from "react";
import NavigationDots from "../components/NavigationDots";
// import SocialMedia from "../components/SocialMedia";  ← REMOVE THIS LINE

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        
        {/* REMOVED SOCIALMEDIA */}
        {/* <SocialMedia /> */}

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text"></p>
            <p className="p-text"></p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
