import accomodationsReducer from "./accomodationsReducer";
import followReducer from "./followReducer";
import loginStatusReducer from "./loginStatusReducer";
import openLogin from "./openLogin";

const reducer = {
  openLogin: openLogin.reducer,
  accomodation: accomodationsReducer,
  isLogged: loginStatusReducer.reducer,
  follows: followReducer,
};

export default reducer;
