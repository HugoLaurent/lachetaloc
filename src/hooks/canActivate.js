import store from "../app/store";
import { redirect } from "react-router-dom";

function canActivate() {
  if (store.getState().isLogged.isLog) {
    return null;
  }
  return redirect("/");
}

export default canActivate;
