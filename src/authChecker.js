const verify = "https://tulibayev.uz/api/user/emailverification";
const login = "https://tulibayev.uz/api/user/login";

function isUserValid() {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    console.log(decodedToken);
    if (decodedToken.iss === (login||verify)) {
      return true;
    }else{
      return false;
    }
  } catch (error) {
    console.error("validatsiyada xatolik:", error);
    return false;
  }
}
export default isUserValid;
