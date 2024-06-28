import {createStore} from 'redux';
function cartReducer(state = { items: {} }, action) {
    const product = action.payload;
    switch (action.type) {
        case "ADD_TO_CART": {
            if (state.items[product.id]) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...product,
                            qty: state.items[product.id].qty + 1
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...product,
                            qty: 1
                        }
                    }
                }
            }
        }
        case "REMOVE_FROM_CART": {
            if (state.items[product.id].qty - 1 > 0) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...product,
                            qty: state.items[product.id].qty - 1
                        }
                    }
                }
            }
            else {
                const { [product.id]: _, ...remainingItems } = state.items;
                return {
                    ...state,
                    items: remainingItems
                };
            }
        }
        default:
            return state;
    }
}

const store = createStore(cartReducer);
export default cartReducer;