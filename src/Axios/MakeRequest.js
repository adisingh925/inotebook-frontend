import axios from "axios";

const MakeRequest = (token, method, url, data) => {
  return axios({
    method: method,
    headers: { Authorization: token, "Content-Type": "application/json" },
    url: url,
    data: data !== null ? data : {},
  }).catch(function (error) {
    return error.response;
  });
};

export default MakeRequest;
