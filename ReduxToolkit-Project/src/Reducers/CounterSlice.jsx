import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}


export const CounterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        addOne : (state) =>{
            state.value += 1;
        },

        subOne : (state) =>{
            state.value -= 1;
        },

        addAnyNumber : (state, action) =>{
            state.value += action.payload;
        },
    },
})

export const { addOne, subOne, addAnyNumber} = CounterSlice.actions


export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(addAnyNumber(amount))
    }, 1000)
  }


export default CounterSlice.reducer