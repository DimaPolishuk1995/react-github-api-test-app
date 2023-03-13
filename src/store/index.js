import { configureStore } from '@reduxjs/toolkit';
import repositoriesReducer from './repositoriesSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
    reducer: {
        repositories: repositoriesReducer,
        filters: filtersReducer,
    },
    devTools: true,
});

export default store;
