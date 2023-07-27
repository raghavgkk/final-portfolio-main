import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "../assets/icons/DropDown.svg";
import "./navSubParts.css";
const WorkMenu = () => {
  const [workSubMenu, setWorkSubMenu] = useState(false);

  const handleDropDownClick = (e) => {
    e.stopPropagation();
    setWorkSubMenu(!workSubMenu);
  };

  return (
    <div className="drawer-link">
      <div className="workPlusicon" onClick={handleDropDownClick}>
        <Link to="/work">
          <span className="nav-link">Work</span>
        </Link>{" "}
        <div className="drop">
          <img src={DropDown} alt="dropdown" className="icon" style={{cursor:'pointer'}} />
        </div>
      </div>
      {workSubMenu && (
        <div
          className="subParts"
          style={{
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Link to="/project/vetic">Vetic</Link>
          <br />
          <Link to="/project/cura">Cura MSDC 22</Link>
          <br />
          <Link to="/project/paws&wings">Paws&Wings</Link>
          <br />
          <Link to="/project/looks">Looks Salon</Link>
          <br />
          <Link to="/project/raahi">Raahi</Link>
          <br />
          <Link to="/project/nid">NID 2023</Link>
        </div>
      )}
    </div>
  );
};

export default WorkMenu;
