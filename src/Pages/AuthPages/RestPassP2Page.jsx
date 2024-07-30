import React from "react";
import ResetPassP2 from "../../component/AUTH/ResetPassP2/ResetPassP2";

const RestPassP2Page = ({ mode, screenWidth }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <ResetPassP2 mode={mode} screenWidth={screenWidth} />
    </div>
  );
};

export default RestPassP2Page;
