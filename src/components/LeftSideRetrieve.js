import React from "react";
import { useHistory } from "react-router-dom";
const LeftSideRetrieve = ({ setType }) => {
  const history = useHistory();

  return (
    <div>
      <div style={{ marginTop: "35%" }}>
        <label
          style={{
            color: "#3C3C3C",
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          Password sent
        </label>
      </div>

      <div style={{ marginTop: "3%" }}>
        <label
          style={{
            color: "#3C3C3C",
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          We have send an email to Reset Your Password
        </label>
      </div>

      <div style={{ marginTop: "3%" }}>
        <label
          style={{
            color: "#5A575A",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          +20102579653
        </label>
      </div>

      <div style={{ marginTop: "3%" }}>
        <label
          style={{
            color: "#3C3C3C",
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          Please check your messages and try logging in again
        </label>
      </div>

      <div style={{ marginTop: "14px" }}>
        <button
          style={{
            backgroundColor: "#547445",
            borderRadius: "6px",
            border: "0px",
            width: "30%",
            height: "44px",
            color: "#FFFFFF",
            fontWeight: "700",
          }}
          onClick={() => setType("login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LeftSideRetrieve;
