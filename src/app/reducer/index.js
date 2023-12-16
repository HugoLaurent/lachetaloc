import accomodationsReducer from "./accomodationsReducer";
import loginStatusReducer from "./loginStatusReducer";
import openLogin from "./openLogin";

const reducer = {
  openLogin: openLogin.reducer,
  accomodation: accomodationsReducer,
  isLogged: loginStatusReducer.reducer,
};

export default reducer;
