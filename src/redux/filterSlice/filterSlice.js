import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  status: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filtersInitialState,
    reducers: {
        filterContacts(state, action) {
           return { ...state, status: action.payload};
        },
    },
});

export const { filterContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;