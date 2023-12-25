import { jwtDecode } from "jwt-decode";

import { redirect } from "react-router-dom";
import store from "../app/store";
import { changeStatus } from "../app/reducer/loginStatusReducer";

async function checkUserAuthentication() {
  const isTokenPresent = localStorage.getItem("token");
  if (isTokenPresent) {
    console.log("token present");
    if (!jwtDecode(isTokenPresent)) {
      console.log("token invalid");
      return redirect("/");
    }
    const decodedToken = jwtDecode(isTokenPresent);
    const dateNow = Math.floor(Date.now() / 1000);
    const isTokenValid = decodedToken.exp >= dateNow;

    if (!isTokenValid) {
      console.log("token expired");
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.log("refresh token not present");
        localStorage.removeItem("token");

        return redirect("/");
      }
      const response = await fetch(
        "https://lachetaloc.onrender.com/auth/refresh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        }
      );
      const data = await response.json();
      if (data.token) {
        store.dispatch(changeStatus(true));
        localStorage.setItem("token", data.token);
        console.log("token refresh");
        return true;
      }
      return redirect("/");
    }
    console.log("token valid");
    store.dispatch(changeStatus(true));
    return null;
  }
  console.log("token not present");
  return false;
}

export default checkUserAuthentication;
