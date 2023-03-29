import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../feature/TableSlice";
import appNameReducer from "../feature/AppNameSlice";

const reducer = { table: tableReducer, appName: appNameReducer };

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
