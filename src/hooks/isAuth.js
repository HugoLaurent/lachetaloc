import { jwtDecode } from "jwt-decode";
import store from "../app/store";
import { redirect } from "react-router-dom";
import { changeStatus } from "../app/reducer/loginStatusReducer";

function getToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return redirect("/");
}

function decodeToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    redirect("/");
  }
}

export function canActivate() {
  if (store.getState().isLogged.isLog) {
    return null;
  }
  return redirect("/");
}

const generateNewToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await fetch("http://localhost:3000/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });
  const data = await response.json();
  if (data.token) {
    store.dispatch(changeStatus(true));
    localStorage.setItem("token", data.token);
    console.log("token refresh");
    return true;
  }
  return redirect("/");
};

async function isAuth() {
  const isLog = store.getState().isLogged.isLog;

  if (!isLog) {
    const token = getToken();
    if (!token) {
      return redirect("/");
    }
    const decodedToken = decodeToken(token);
    if (!decodedToken) {
      return redirect("/");
    }
    const dateNow = Math.floor(Date.now() / 1000);
    console.log(token);
    const isTokenValide = decodedToken.exp >= dateNow;
    if (isTokenValide) {
      return generateNewToken();
    }
  }

  return true;
}

export default isAuth;
