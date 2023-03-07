import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./component.css";

const SuccessPayment = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div
          className="card-wrapper row"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <center>
            <div className="card">
              <div className="styled-box">
                <i className="checkmark">✓</i>
              </div>
              <h1>Success</h1>
              <p>
                Your Payment Has been Successful,
                <br /> Your Credentials Are Updated Please Relogin to make the
                changes apply
              </p>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default SuccessPayment;
