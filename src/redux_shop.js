import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'

//Actions
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const GET_PRODUCTS_STARTED = 'GET_PRODUCTS_STARTED'
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'

//Action Creators
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        item
    }
}

export const getProductsStarted = () => {
    return {
        type: GET_PRODUCTS_STARTED
    }
}

export const getProductsSuccess = (items) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        items
    }
}

export const getProductsFailed = (error) => {
    return {
        type: GET_PRODUCTS_FAILED,
        error
    }
}

//Async action
export function getProducts(){
    return function(dispatch){
        console.log('dispatching started')
        dispatch(getProductsStarted())
        axios.get('http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp')
            .then((results) => {
                dispatch(getProductsSuccess(results.data.response.products))
            })
            .catch((err) => {
                dispatch(getProductsFailed(err))
            })
    }
}

var initialState = {
    cartItems: [],
    orderTotal: 0
}
//Reducer
var shop = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TO_CART:
            var isItemExists = state.cartItems.some((cartItem) => {
                return cartItem.id == action.item.id
            })

            if (isItemExists) {
                action.item.qty++
            }
            else {
                action.item.qty = 1;
            }

            return {
                cartItems: [
                    ...state.cartItems.filter((cartItem) => {
                        return cartItem.id != action.item.id
                    }),
                    action.item
                ],
                orderTotal: state.cartItems.filter((cartItem) => {
                    return cartItem.id != action.item.id
                }).reduce((total, cartItem) => {
                    return total + cartItem.priceOne * cartItem.qty
                }, 0) + action.item.priceOne * action.item.qty
            }

        case REMOVE_FROM_CART:
            return {
                cartItems: state.cartItems.filter((cartItem) => {
                                return cartItem.id != action.item.id
                            }),
                orderTotal: state.cartItems.filter((cartItem) => {
                                return cartItem.id != action.item.id
                            }).reduce((total, cartItem) => {
                                return total + cartItem.priceOne * cartItem.qty
                            }, 0)
            }
        default:
            return state;
    }
}

var catalog = (state = {
    items: [],
    loading: true,
    error: false
}, action) => {
    switch (action.type) {
        case GET_PRODUCTS_STARTED:
            return {
                items: [],
                loading: true,
                error: false
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                items: action.items,
                loading: false,
                error: false
            }
        case GET_PRODUCTS_FAILED:
            return {
                items: [],
                loading: false,
                error: true
            }
        default:
            return state;
    }

}

var rootReducer = combineReducers({
    shop,
    catalog
})

//store
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);