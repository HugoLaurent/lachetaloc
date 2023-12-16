import accomodationsReducer from "./accomodationsReducer";
import openLogin from "./openLogin";

const reducer = {
  openLogin: openLogin.reducer,
  accomodation: accomodationsReducer,
};

export default reducer;
