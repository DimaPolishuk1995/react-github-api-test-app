import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api';

export const fetchRepositories = createAsyncThunk(
    'repositories/fetchRepositories',
    async (params = { searchTerm: 'react' }) => {
        const response = await instance.get('/search/repositories', {
            params: {
                q: `${params.searchTerm} in:name`,
                per_page: 20,
            },
        });
        return response.data.items;
    },
    {
        rejectWithValue: (error) => {
            console.error(error);
            return [];
        },
    }
);

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState: {
        entities: [],
        status: 'idle',
        error: null,
        isInputActive: false,
    },
    reducers: {
        setIsInputActive: (state, action) => {
            state.isInputActive = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchRepositories.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchRepositories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.entities = action.payload;
            })
            .addCase(fetchRepositories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const {
    setIsInputActive,
} = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
