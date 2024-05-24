import React from "react";
import { NavLink } from 'react-router-dom';
import '../css/component/topbar.css'
// import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
//"@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <NavLink className="navbar-brand" to="/"> 
          <span className="logo">BabyShop </span>
          <img src='/src/assets/images/logo_baby.png' style={{ width: '50px', height: 'auto' }}/> </NavLink>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="data:image/jpeg;base64,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" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;