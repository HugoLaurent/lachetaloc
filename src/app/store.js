import { configureStore } from "@reduxjs/toolkit";

import openLogin from "./features/openLogin";

export default configureStore({
  reducer: {
    openLogin: openLogin.reducer,
  },
});
