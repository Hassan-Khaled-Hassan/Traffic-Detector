import React from "react";
import ResetPassP1 from "../../component/AUTH/ResetPassP1/ResetPassP1";

const RestPass1page = ({ mode, screenWidth }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <ResetPassP1 mode={mode} screenWidth={screenWidth} />
    </div>
  );
};

export default RestPass1page;
