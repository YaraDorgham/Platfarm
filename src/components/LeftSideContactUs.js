import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup, Radio } from "@blueprintjs/core";
const LeftSideContactUs = ({ setType }) => {
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
          Contact Us
        </label>
      </div>

      <div style={{ marginTop: "23px" }}>
        <InputGroup
          className="inp"
          leftIcon="person"
          type="text"
          placeholder="Email"
          style={{
            backgroundColor: "#F0EAE4",
            borderRadius: "10px",
            border: "0px",
            width: "85%",
            height: "40px",
          }}
        ></InputGroup>
      </div>

      <div style={{ marginTop: "3%" }}>
        <InputGroup
          className="inp"
          leftIcon="office"
          type="text"
          placeholder="Name"
          style={{
            backgroundColor: "#F0EAE4",
            borderRadius: "10px",
            border: "0px",
            width: "85%",
            height: "40px",
          }}
        ></InputGroup>
      </div>

      <div style={{ marginTop: "3%" }}>
        <InputGroup
          className="inp"
          leftIcon="mugshot"
          type="text"
          placeholder="Name"
          style={{
            backgroundColor: "#F0EAE4",
            borderRadius: "10px",
            border: "0px",
            width: "85%",
            height: "40px",
          }}
        ></InputGroup>
      </div>

      <div style={{ marginTop: "3%" }}>
        <InputGroup
          className="inp"
          leftIcon="phone"
          type="text"
          placeholder="Contact #"
          style={{
            backgroundColor: "#F0EAE4",
            borderRadius: "10px",
            border: "0px",
            width: "85%",
            height: "40px",
          }}
        ></InputGroup>
      </div>
      <div style={{ marginTop: "3%" }}>
        <label style={{ fontWeight: "500" }}>Farm Type:</label>
      </div>

      <div style={{ display: "flex", marginTop: "2%" }}>
        <Radio
          label="Crop Farm"
          alignIndicator="left"
          style={{ marginRight: "5%" }}
        ></Radio>
        <Radio label="Tree Farm" alignIndicator="left"></Radio>
      </div>

      <div style={{ marginTop: "3%" }}>
        <InputGroup
          className="inp"
          leftIcon="chat"
          type="text"
          placeholder="Message"
          style={{
            backgroundColor: "#F0EAE4",
            borderRadius: "10px",
            border: "0px",
            width: "85%",
            height: "88px",
          }}
        ></InputGroup>
      </div>

      <div style={{ marginTop: "14px" }}>
        <button
          style={{
            backgroundColor: "#547445",
            borderRadius: "6px",
            border: "0px",
            width: "40%",
            height: "44px",
            color: "#FFFFFF",
            fontWeight: "700",
          }}
          onClick={() => setType("login")}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LeftSideContactUs;
