import React from "react";
import { createPortal } from "react-dom";

const PortalItem = (props) => {
  return (
    <div className='items'> Add games to your list with the form below</div>
  );
};

const MyPortal = (props) => {
  return (
    <>{createPortal(<PortalItem />, document.getElementById("portalEl"))}</>
  );
};
export default MyPortal;
