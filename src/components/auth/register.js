import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import useStyles from "./style";
import Home from "../../img/home.svg";

const Register = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Claim | Register</title>
      </Helmet>
      <div className={`${classes.root}`}>
        <div className="image text-center">
          <img className="img" src={Home} alt="Home" />
        </div>
        <div className="login">
          <h3 className="title">Create an account</h3>
          <h6 className="subtitle">join the e-administration experiance</h6>
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
                type="text"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input-text"
                type="text"
                name="phone"
                placeholder="Phone"
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
            <div className="form-group">
              <input
                className="input-text"
                type="password"
                name="password2"
                placeholder="Password Confirmation"
                required
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="button-primary mt-3"
            />
            <Link className="form-link" to="/login">
              <span>Sign in</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
