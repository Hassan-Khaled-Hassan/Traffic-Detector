import React from "react";
import ResetPassP3 from "../../component/AUTH/ResetPassP3/ResetPassP3";

const ResetPassP3Page = ({ mode, screenWidth }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <ResetPassP3 mode={mode} screenWidth={screenWidth} />
    </div>
  );
};

export default ResetPassP3Page;
