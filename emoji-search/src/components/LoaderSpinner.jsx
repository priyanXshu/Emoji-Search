import React from "react";
import * as Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <Loader.ThreeDots
      type="ThreeDots"
      color="green"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="loader"
      ariaLabel="loading"
    />
  );
};

export default LoaderSpinner;
