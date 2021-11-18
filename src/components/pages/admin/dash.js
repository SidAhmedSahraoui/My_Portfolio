import React from "react";
import { Helmet } from "react-helmet";
import useStyles from "./dash-jss";
// layouts
import Post from "../posts/post";
import Sidebar from "../../layout/sidebar/sidebar";
const Dash = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Claim | Admin Dashboard</title>
      </Helmet>
      <div className={`${classes.root}`}>
        <div className="side-part">
          <Sidebar />
        </div>
        <div className="main-part">
          <h1 className="main-title">All claims</h1>
          <div className="main-container">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dash;
