import { configureStore } from "@reduxjs/toolkit";

import templateReducer from "./template/reducers";

export default configureStore({
  reducer: {
    templates: templateReducer,
  },
});
