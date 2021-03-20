import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import servicesReducer from "./reducers/servicesReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    services: servicesReducer,
  },
});
