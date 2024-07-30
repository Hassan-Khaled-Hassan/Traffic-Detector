import React from "react";
import SignUp from "../../component/AUTH/SignUp/SignUp";

const SignUpPage = ({ mode, screenWidth }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <SignUp mode={mode} screenWidth={screenWidth} />
    </div>
  );
};

export default SignUpPage;
