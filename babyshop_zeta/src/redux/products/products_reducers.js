import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
} from './products_types';

const initialState = {
  loading: true,
  products: [],
  cart: [],
  singleProduct: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
      
          case ADD_TO_CART: {
            // Check if the product already exists in the cart
            const existingProduct = state.cart.find(item => item.id === action.payload.id);
          
            // If the product exists, increment its quantity
            if (existingProduct) {
              return {
                ...state,
                cart: state.cart.map(item => 
                  item.id === action.payload.id 
                    ? { ...item, qty: item.qty + 1 } 
                    : item
                ),
              };
            } else {
              // If the product is new, add it to the cart with quantity 1
              return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }],
              };
            }
          }
          
      
      
      


    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        loading: false,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
