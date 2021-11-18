import React from "react";
import useStyles from "./sidebar-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faEnvelope,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="sidebar">
        <div className="sid-container">
          <Link to="/dash" className="sid-item">
            <FontAwesomeIcon className="icon" icon={faDesktop} size="lg" />
            <h3>Home</h3>
          </Link>
        </div>
        <div className="sid-container">
          <Link to="/archive" className="sid-item">
            <FontAwesomeIcon className="icon" icon={faTasks} size="lg" />
            <h3>Accepted</h3>
          </Link>
        </div>
        <div className="sid-container">
          <Link to="/settings" className="sid-item">
            <FontAwesomeIcon className="icon" icon={faEnvelope} size="lg" />
            <h3>Settings</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
