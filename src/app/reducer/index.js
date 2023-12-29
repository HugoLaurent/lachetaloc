import accomodationsReducer from "./accomodationsReducer";
import followReducer from "./followReducer";
import loginStatusReducer from "./loginStatusReducer";
import openLogin from "./openLogin";
import cardModalReducer from "./cardModalReducer";
import locationsReducer from "./locationReducer";
import loginAlertReducer from "./loginAlertReducer";

const reducer = {
  openLogin: openLogin.reducer,
  accomodation: accomodationsReducer,
  isLogged: loginStatusReducer.reducer,
  follows: followReducer,
  modal: cardModalReducer.reducer,
  location: locationsReducer,
  loginAlert: loginAlertReducer.reducer,
};

export default reducer;
