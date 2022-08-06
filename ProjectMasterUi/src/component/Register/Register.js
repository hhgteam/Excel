import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { env } from "../../env";
function Register() {
  let common = new CommonService();
  const [UserName, SetUserName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Gender, SetGender] = useState("");

  function SubmitData(){
  
  
    const UserData = {
      UserName: UserName,
      Email: Email,
      Password: Password,
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Gender:Gender
    };
    try {
      const UserRagister = `${urlConstant.User.UserDataPost}`;
      common.httpPost(UserRagister, UserData).then(()=>{
        SetUserName("");
        SetEmail("");
        SetPassword("");
        SetFirstName("");
        SetLastName("");
        SetPhone("");
        SetGender("");
      })
    } catch (error) {
      console.log(error);
    }
  
  }

  return (
    <div className="auth">
      <div className="auth_left">
        <div className="card">
          <div className="text-center mb-5">
            <Link className="header-brand" to="/">
              <i className="fa fa-soccer-ball-o brand-logo" />
            </Link>
          </div>
          <div className="card-body">
            <div className="card-title">Create new account</div>
            <div className="form-group">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={UserName}
                onChange={(e) => {
                  SetUserName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={Email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={Password}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={FirstName}
                onChange={(e) => {
                  SetFirstName(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={LastName}
                onChange={(e) => {
                  SetLastName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Gender</label>
              <input
                type="radio"
                value="Male"
                name="Gender"
                placeholder="Enter name"
                onChange={(e) => {
                  SetGender(e.target.value);
                }}
              />
              Male
              <input
                type="radio"
                value="Female"
                name="Gender"
                placeholder="Enter name"
                onChange={(e) => {
                  SetGender(e.target.value);
                }}
              />
              Female
            </div>

            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={Phone}
                onChange={(e) => {
                  SetPhone(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">
                  Agree the <a href="#">terms and policy</a>
                </span>
              </label>
            </div>
            <div className="form-footer">
              <button type="submit" onClick={()=>{SubmitData()}} className="btn btn-primary btn-block">
                Create new account
              </button>
            </div>
          </div>
          <div className="text-center text-muted">
            Already have account? <Link to="/Login">Sign in</Link>
          </div>
        </div>
      </div>
      <div className="auth_right full_img" />
    </div>
  );
}

export default Register;
