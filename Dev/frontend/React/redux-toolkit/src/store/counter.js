import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state) => {
            state.counterVal+=1;
        },
        decrement:(state) => {
            state.counterVal--;
        },
        addition:(state,action) => {
            state.counterVal+=action.payload;
        },
        subtraction:(state,action) => {
            state.counterVal-=action.payload;
        },
        toggle:() => {
            privacyActions.toggle()
        }
    }

})

export const counterActions = counterSlice.actions;
export default counterSlice;