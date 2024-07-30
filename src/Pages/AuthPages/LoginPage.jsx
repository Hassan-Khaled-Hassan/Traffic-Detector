import React from "react";
import Login from "../../component/AUTH/Login/Login";

const LoginPage = ({ mode, screenWidth }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Login mode={mode} screenWidth={screenWidth} />
    </div>
  );
};

export default LoginPage;
