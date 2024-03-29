import { createSlice, Slice } from '@reduxjs/toolkit';
import { initialState } from './initial.state';
import cartReducer from './reducers/cart.reducer';
import orderReducer from './reducers/order.reducer';

export const CART_KEY_IN_STORE = 'cart';

export const cartSlice: Slice = createSlice({
    name: CART_KEY_IN_STORE,
    initialState: initialState,
    reducers: {
        ...cartReducer,
        ...orderReducer,
    },
});

export const {
    //? ********************| FETCH CART ACTIONS |*******************/
    fetchCart,
    fetchCartSuccess,
    fetchCartFailure,

    //? ********************| ADD CART ACTIONS |*******************/
    addCart,
    addCartSuccess,
    addCartFailure,

    //? ********************| UPDATE BY QUANTITY CART ACTIONS |*******************/
    updateByQuantityCart,
    updateByQuantityCartSuccess,
    updateByQuantityCartFailure,

    //? ********************| DETAILS CART ACTIONS |*******************/
    detailsCart,
    detailsCartSuccess,
    detailsCartFailure,

    //? ********************| DETAILS CART ACTIONS |*******************/
    deleteCart,
    deleteCartSuccess,
    deleteCartFailure,

    setActivePage,
    resetCart,

    //? ********************| ADD ORDER ACTIONS |*******************/
    addOrder,
    addOrderSuccess,
    addOrderFailure,

    //? ********************| FETCH PASSED ORDERS ACTIONS |*******************/
    fetchPassedOrder,
    fetchPassedOrderSuccess,
    fetchPassedOrderFailure,

    //? ********************| FETCH RECEIVED ORDERS ACTIONS |*******************/
    fetchReceivedOrder,
    fetchReceivedOrderSuccess,
    fetchReceivedOrderFailure,

    setActivePageOrder,
    setActivePageReceivedOrder,
    resetReceivedOrder,
    resetPassedOrder,
    resetOrder,
} = cartSlice.actions;

//? ********************| CART SELECTORS |*******************/
export const loadingCart = (state: any) => state[CART_KEY_IN_STORE].cart.loading;
export const entityCart = (state: any) => state[CART_KEY_IN_STORE].cart.entity;
export const loadingEntitiesCart = (state: any) => state[CART_KEY_IN_STORE].cart.loadingEntities;
export const entitiesCart = (state: any) => state[CART_KEY_IN_STORE].cart.entities;
export const totalItemsCart = (state: any) => state[CART_KEY_IN_STORE].cart.totalItems;
export const totalPagesCart = (state: any) => state[CART_KEY_IN_STORE].cart.totalPages;
export const activePageCart = (state: any) => state[CART_KEY_IN_STORE].cart.activePage;
export const deleteSuccessCart = (state: any) => state[CART_KEY_IN_STORE].cart.deleteSuccess;
export const addSuccessCart = (state: any) => state[CART_KEY_IN_STORE].cart.addSuccess;
export const updateSuccessCart = (state: any) => state[CART_KEY_IN_STORE].cart.updateSuccess;

//? ********************| PASSED ORDER SELECTORS |*******************/
export const loadingOrder = (state: any) => state[CART_KEY_IN_STORE].order.loading;
export const entityOrder = (state: any) => state[CART_KEY_IN_STORE].order.entity;
export const loadingEntitiesOrder = (state: any) => state[CART_KEY_IN_STORE].order.loadingEntities;
export const entitiesOrder = (state: any) => state[CART_KEY_IN_STORE].order.entities;
export const totalItemsOrder = (state: any) => state[CART_KEY_IN_STORE].order.totalItems;
export const totalPagesOrder = (state: any) => state[CART_KEY_IN_STORE].order.totalPages;
export const activePageOrder = (state: any) => state[CART_KEY_IN_STORE].order.activePage;
export const deleteSuccessOrder = (state: any) => state[CART_KEY_IN_STORE].order.deleteSuccess;
export const addSuccessOrder = (state: any) => state[CART_KEY_IN_STORE].order.addSuccess;

//? ********************| RECEIVED ORDER SELECTORS |*******************/
export const loadingOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.loading;
export const entityOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.entity;
export const loadingEntitiesOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.loadingEntities;
export const entitiesOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.entities;
export const totalItemsOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.totalItems;
export const totalPagesOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.totalPages;
export const activePageOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.activePage;
export const deleteSuccessOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.deleteSuccess;
export const addSuccessOrderReceived = (state: any) => state[CART_KEY_IN_STORE].orderReceived.addSuccess;
