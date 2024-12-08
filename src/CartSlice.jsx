import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // The plant details are in action.payload
      const existingItem = state.items.find(item => item.name === newItem.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increment the quantity if the item already exists
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Add the item with an initial quantity of 1
      }
    },
    removeItem: (state, action) => {const itemName = action.payload; // The name of the item to remove is in action.payload
      state.items = state.items.filter(item => item.name !== itemName); // Remove the item by filtering it out
    
    },
    updateQuantity: (state, action) => {

    const { name, quantity } = action.payload; // Extract name and quantity from the payload
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity of the found item
      }
    },
  },
});


export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
