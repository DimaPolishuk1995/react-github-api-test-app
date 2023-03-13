import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        page: 1,
        searchTerm: '',
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.page = 1;
        },
    },
});

export const { setPage, setSearchTerm } = filtersSlice.actions;

export default filtersSlice.reducer;
