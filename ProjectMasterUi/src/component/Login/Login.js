import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginData , incNumber, decNumber } from "../../action/LoginAction";

function Login() {

  const myState = useSelector((state) => state.loginRreducers);
  const dispatch = useDispatch();
  return (
    <>



    <div className="auth">
    <div className="auth_left">
      <div className="card">
        <div className="text-center mb-2">
          {/*
          <a className="header-brand" href="index-2.html">
            <i className="fa fa-soccer-ball-o brand-logo" />
          </a>{" "}
          */}
          <Link className="header-brand" to="/">
          <i className="fa fa-soccer-ball-o brand-logo" />
          </Link>
        </div>
        <div className="card-body">
          <div className="card-title">Login to your account</div>
          <div className="form-group">
            <select className="custom-select">
              <option>Project Manager</option>
              <option>Team Leader</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Password
              <a href="forgot-password.html" className="float-right small">
                I forgot password
              </a>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <span className="custom-control-label">Remember me</span>
            </label>
          </div>


          <h1>hello + {myState}</h1>
      <button onClick={() => dispatch(decNumber())}>-</button>{" "}
      <button onClick={() => dispatch(incNumber())}>+</button>
          <div className="form-footer">
            <a href="/" className="btn btn-primary btn-block" title="">
              Sign in
            </a>
          </div>
        </div>
        <div className="text-center text-muted">
          Don't have account yet? <link to="/Register" />
          Sign up
        </div>
      </div>
    </div>
    <div className="auth_right full_img" />
  </div>
  
  </>
  )
}

export default Login;