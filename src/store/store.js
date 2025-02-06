import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore.
import themeReducer from './themeSlice'; // Because we exported using 'default', we don't need to import using curly braces here


const store = configureStore({ // configureStore is called to create a Redux store.
    reducer: { // Setting theme key to themeReducer. This means the theme state will be managed by the themeReducer that we've defined in themeSlice.js.
        theme: themeReducer,
    },
});

export default store; // Exporting store component to be used elsewhere.
