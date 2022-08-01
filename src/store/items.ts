import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../components/Item';



// Define a type for the slice state
interface ItemsState {
    all: Array<Item>
}

// Define the initial state using that type
const initialState: ItemsState = {
    all: []
}

export const itemsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            state.all.push(payload);
        },
        resetItems: (state, { payload }) => {
            state.all = payload;
        },
    },
})

export const { addItem, resetItems } = itemsSlice.actions;

export default itemsSlice.reducer