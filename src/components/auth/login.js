import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import useStyles from "./style";
import Home from "../../img/home.svg";
const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Claim</title>
      </Helmet>
      <div className={`${classes.root}`}>
        <div className="image text-center">
          <img className="img" src={Home} alt="Home" />
        </div>
        <div className="login">
          <h3 className="title">Sign in</h3>
          <h6 className="subtitle">
            use your email or username and password to login
          </h6>
          <form className="form-container mt-4">
            <div className="form-group">
              <input
                className="input-text"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <input
              type="submit"
              value="Sign in"
              className="button-primary mt-3"
            />
            <Link className="form-link" to="/">
              <span>Register</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
