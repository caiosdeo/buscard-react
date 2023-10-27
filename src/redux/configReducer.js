import { createSlice } from "@reduxjs/toolkit";

const zeroState = {
    saldo: 0,
    passSimplesSem: 0,
    passDuplasSem: 0
};

const storedData = localStorage.getItem('config');
const parsedData = storedData ? JSON.parse(storedData) : zeroState;

export const configSlice = createSlice({
    name: "config",
    initialState: {
        saldo: parsedData.saldo,
        passSimplesSem: parsedData.passSimplesSem,
        passDuplasSem: parsedData.passDuplasSem
    },
    reducers: {
        add_config: (state, action) => {
            state.saldo = action.payload.saldo;
            state.passSimplesSem = action.payload.passSimplesSem;
            state.passDuplasSem = action.payload.passDuplasSem;

            localStorage.setItem('config', JSON.stringify(state));
        }
    }
});

export const { add_config } = configSlice.actions;

export default configSlice.reducer;