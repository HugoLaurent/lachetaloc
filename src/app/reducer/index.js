import accomodationsReducer from "./accomodationsReducer";
import followReducer from "./followReducer";
import loginStatusReducer from "./loginStatusReducer";
import openLogin from "./openLogin";
import cardModalReducer from "./cardModalReducer";

const reducer = {
  openLogin: openLogin.reducer,
  accomodation: accomodationsReducer,
  isLogged: loginStatusReducer.reducer,
  follows: followReducer,
  modal: cardModalReducer.reducer,
};

export default reducer;
