import { configureStore } from "@reduxjs/toolkit";
import cartaoReducer from "./cartaoReducer";
import configReducer from "./configReducer";

export default configureStore({
    reducer: {
        cartao: cartaoReducer,
        config: configReducer
    }
});