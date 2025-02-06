import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice.

// Creating our slice for our theme
const themeSlice = createSlice({
    name: 'theme', // Name of our slice
    initialState: { darkMode: false }, // Initial state is lightmode because it is set to false.
    reducers: { // Defines the actions and logic for changing the state.
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode; // Toggles between true, and false, light and darkmode.
        },
    },
});

// Exporting action to toggle between the different themes.
export const { toggleTheme } = themeSlice.actions;

// Exporting the reducer to be used in the store
export default themeSlice.reducer; // Since we use 'default' we dont need to import reducer using {}