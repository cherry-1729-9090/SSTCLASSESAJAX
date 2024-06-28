// CategoriesReducer.js
export function loadCategories() {
    return (dispatch) => {
        fetch("https://run.mocky.io/v3/dc25e1aa-3ae4-4c41-8626-b2529c231bcd")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                console.log(res);
                dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res });
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                dispatch({ type: "LOAD_CATEGORIES_ERROR", error: error.message });
            });
    };
}

const initialState = {
    categories: [],
    error: null,
};

function categoriesReducer(state = initialState, action) {
    console.log('Action:', action); // Logging the action
    switch (action.type) {
        case "LOAD_CATEGORIES_DONE":
            return {
                ...state,
                categories: action.payload,
                error: null,
            };
        case "LOAD_CATEGORIES_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default categoriesReducer;
