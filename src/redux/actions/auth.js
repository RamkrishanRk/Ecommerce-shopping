import { API_URL } from "./config";
import { LOGIN_SUCCESS } from "./type";

export const login = () => () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTdiY2E4MTI2ZDE3ZjA5NTAyNTc4NCIsImlhdCI6MTY3NjEzMTU0MCwiZXhwIjoxNjgzOTA3NTQwfQ.7WWBjNq0NvJjYv0inTxTt07PFcY_9InWGFzKE2WqfQM"
  );

  var raw = JSON.stringify({
    userName: "daman",
    email: "daman@gmail.com",
    password: "123",
    passwordConfirm: "123",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${API_URL}/api/v1/users/signup`, requestOptions)
    .then((response) => response.jon())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
