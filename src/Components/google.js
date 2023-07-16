import React from "react";

import { GoogleLogin } from "@react-oauth/google";

const google = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap={true}
      shape="rectangular"
      width="284px"
      theme="filled_blue"
      type="standard"
      size="large"
    />
  );
};

export default google;
