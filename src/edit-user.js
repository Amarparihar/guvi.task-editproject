import React, { useContext, useState } from "react";
import UserContext from "./user-context";


function Edituser(props) {
  let [
    Name,
    Email,
    PermenentAddress,
    CurrentAddress,
    MobileNo,
    AlternateNo,
    Action,
    index
  ] = props.match.params.id.split("+");
  let users = useContext(UserContext);
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPAddress, setUserPAddress] = useState("");
  let [userCAddress, setUserCAddress] = useState("");
  let [userMobileNo, setUserMobileNo] = useState("");
  let [userAlternateNo, setUserAlternateNo] = useState("");

  let userData = {
    userName,
    userEmail,
    userPAddress,
    userCAddress,
    userMobileNo,
    userAlternateNo,
  };
  return (
    <>
      <h1>User {props.match.params.id} </h1>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          users.setUserList(users.userList.splice(index, 1, userData));
          console.log(userData);
          users.setUserList([...users.userList])
          setUserName("");
          setUserEmail("");
          setUserPAddress("");
          setUserCAddress("");
          setUserMobileNo("");
          setUserAlternateNo("");
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
                User Name
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="user name"
                style={{ border: "1px solid black" }}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
                Email Id
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="user email"
                style={{ border: "1px solid black" }}
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
                Permenent Address
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="user Permenent address"
                style={{ border: "1px solid black" }}
                value={userPAddress}
                onChange={(e) => {
                  setUserPAddress(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
                {" "}
                current Address
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="user current address"
                style={{ border: "1px solid black" }}
                value={userCAddress}
                onChange={(e) => {
                  setUserCAddress(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
                Mobile No.
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="user contact no"
                style={{ border: "1px solid black" }}
                value={userMobileNo}
                onChange={(e) => {
                  setUserMobileNo(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-6">
              <label style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>
                Alternate Mobile No.
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="alternate no."
                style={{ border: "1px solid black" }}
                value={userAlternateNo}
                onChange={(e) => {
                  setUserAlternateNo(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              style={{ textAlign: "end", marginTop: "5px" }}
            >
               <button className="btn btn-info">Update User</button>
              
            </div>
          </div>
          </div>
      </form>
      
    </>
  );
}

export default Edituser;

