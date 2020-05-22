import React from "react";


function TopHeader() {
  return (
      <React.Fragment>
    
    <div id="topheader" className="pt-3">
      <a href="/">

      <img className="mainlogo" src={require("../images/mainlogo.png")} />
      </a>
    </div>
    </React.Fragment>
  );
}

export default TopHeader;
