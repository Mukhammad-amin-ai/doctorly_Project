const token = localStorage.getItem("token");
function parseJwt(token) {
  if (!token) {
    console.error("Token is null or undefined.");
    return null; 
  }

  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}
let decode = parseJwt(token);
// console.log(decode.iss);
// const decode = "hello world";/

function isUserAuthentificated() {
  return token !== null;
}

// console.log(isUserAuthentificated()/);

export default isUserAuthentificated;
