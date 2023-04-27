import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterReducer";
import UserReducer from "../Reducers/UserReducer";

export default configureStore({
  reducer: {
    counter: CounterReducer,
    user: UserReducer,
  },
});
