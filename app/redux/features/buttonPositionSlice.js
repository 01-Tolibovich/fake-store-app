import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};

const buttonPositionSlice = createSlice({
    name: "buttonPosition",
    initialState,

    reducers: {
        getPositions(state, action) {
            return {
                ...state,
                ...action.payload,
            }
        },
    }
});

export const { getPositions } = buttonPositionSlice.actions
export default buttonPositionSlice.reducer;