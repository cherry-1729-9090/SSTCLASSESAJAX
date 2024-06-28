// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import cartReducer from './store/CartReducer'; // Assuming you have a separate file for the cart reducer
import categoriesReducer from './store/CategoriesReducer'; // Adjust the path as needed

const rootReducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
