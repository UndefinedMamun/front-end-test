import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../components/Item';

import image1 from '../assets/user1.jpg';
import image2 from '../assets/user2.png';

// Define a type for the slice state
interface ItemsState {
    all: Array<Item>
}

// Define the initial state using that type
const initialState: ItemsState = {
    all: [
        {
            title: "Item 1",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat magni ut nam dolorem corrupti dicta deleniti quasi sapiente animi tempore dolor explicabo sit, libero consequatur, debitis perferendis. Beatae, dolore vel.",
            image: image1
        },
        {
            title: "Item 2",
            description: "Repellat magni ut nam dolorem corrupti dicta deleniti quasi sapiente animi tempore dolor explicabo sit, libero consequatur, debitis perferendis. Beatae, dolore vel.",
            image: image2
        }
    ]
}

export const itemsSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            state.all.push(payload);
        },
    },
})

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer