import { LOGIN_SUCCESS, LOGIN_FAIL } from "./type";

const LoginAuth = (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTdiY2E4MTI2ZDE3ZjA5NTAyNTc4NCIsImlhdCI6MTY3NjEzMTU0MCwiZXhwIjoxNjgzOTA3NTQwfQ.7WWBjNq0NvJjYv0inTxTt07PFcY_9InWGFzKE2WqfQM"
  );

  var raw = JSON.stringify({
    email: data.email,
    password: data.password,
    passwordConfirm: data.password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:8500/api/v1/users/login", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default LoginAuth;
