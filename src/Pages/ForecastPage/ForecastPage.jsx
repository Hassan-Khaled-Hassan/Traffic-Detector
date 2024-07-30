import React from "react";

import ForecastForm from "../../component/ForcastForm/ForecastForm";

// eslint-disable-next-line react/prop-types
const ForecastPage = ({ mode, screenWidth, open }) => {
  return (
    <div>
      <ForecastForm mode={mode} screenWidth={screenWidth} open={open} />
    </div>
  );
};

export default ForecastPage;
