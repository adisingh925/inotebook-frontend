import axios from "axios";

const MakeRequest = (token, method, url, data) => {
  return axios({
    method: method,
    baseURL: 'https://inotebook-backend-one.vercel.app/api/',
    headers: { Authorization: token, "Content-Type": "application/json" },
    url: url,
    data: data !== null ? data : {},
  }).catch(function (error) {
    return error.response;
  });
};

export default MakeRequest;
