import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootSlice.js";

const store = configureStore({
  reducer: { rootSlice: rootReducer },
});

export default store;
