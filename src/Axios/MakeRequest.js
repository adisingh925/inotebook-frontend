import axios from "axios";

function MakeRequest(token, method, url, data) {
  return axios({
    method: method,
    headers: { Authorization: token, "Content-Type": "application/json" },
    url: url,
    data : data !== null ? data : {}
  });
}

export default MakeRequest;
