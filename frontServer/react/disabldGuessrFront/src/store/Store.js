import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создаем слайс для состояния `Body`
const bodySlice = createSlice({
    name: 'body',
    initialState: {
        YMapsApiKeys: ["957b28bc-10a6-4558-a1e1-1d83f4bdd42d"],
    },
    reducers: {
        setYMapsApiKeys: (state, action) => {
            state.YMapsApiKeys = action.payload;
        },
    },
});

export const { setYMapsApiKeys } = bodySlice.actions;

export const store = configureStore({
    reducer: {
        body: bodySlice.reducer,
    },
});