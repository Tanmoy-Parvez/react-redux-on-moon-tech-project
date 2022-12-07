import { ADD_TO_CART } from "../actionTypes/actionTypes";

const initialState = {
    cart: []
}


export const productReducer = (state = initialState, action) => {

    const exist = state.cart.find(product => product._id === action.payload._id)

    switch (action.type) {
        case ADD_TO_CART:

            if (exist) {
                exist.quantity = exist.quantity + 1;
                const newCart = state.cart.filter(product => product._id !== action.payload._id);
                return {
                    ...state,
                    cart: [...newCart, exist]
                }
            }

            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }

        default:
            return state;
    }


}