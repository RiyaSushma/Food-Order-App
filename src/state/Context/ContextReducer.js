// import React, { createContext, useContext, useReducer} from 'react';
// import {store} from '../store';
// import {loginReducer} from '../reducers/login_reducer';
// import {cartReducer} from '../reducers/cart_reducer';

// const UserContext = createContext();
// const CartContextState = createContext();
// const CartDispatchContext = createContext();


// export const CartProvider = ({children}) => {
//     const [getState, dispatch] = store;
//     const initialState = getState();
//     const [cartState, cartDispatch] = useReducer(cartReducer, initialState.cart)
//     const [userState, userDispatch] = useReducer(loginReducer, initialState.isLoggedIn)
//     return (
//         <UserContext.Provider value={{userState, userDispatch}}>
//             <CartDispatchContext.Provider value={{cartState, cartDispatch}}>
//             <CartContextState.Provider value={cartState}>
//                 {children}
//             </CartContextState.Provider>
//         </CartDispatchContext.Provider>
//         </UserContext.Provider>
//     )
// }

// export const useCart = () => useContext(CartContextState);
// export const useDispatchCard = () => useContext(CartDispatchContext);
// export const useUserContext = () => useContext(UserContext);