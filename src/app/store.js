import { configureStore } from "@reduxjs/toolkit";

import openLogin from "./reducer/openLogin";

export default configureStore({
  reducer: {
    openLogin: openLogin.reducer,
  },
});
