import {AppStateType, InferActionTypes} from './store';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const TOTAL_PRICE_PRODUCT = 'CART_PAGE_REDUCER/TOTOTAL_PRICE_PRODUCT';


const initialState = {
    totalPriceProduct: 0 as number
}

type InitialStateType = typeof initialState;



export const cartPageReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case TOTAL_PRICE_PRODUCT: {
            return {...state, totalPriceProduct:  action.productPrice}
        }
        
        default:
            return state

    }
}

type ActionType = InferActionTypes<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

export const actions ={
    setProductPrice: (productPrice: number) => {
            return ({type: TOTAL_PRICE_PRODUCT, productPrice } as const )
    }
}

//thunk

export const setProductPriceThunk = (productPrice: number):ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>, getState: () => AppStateType ) => {
    try {
        dispatch(actions.setProductPrice(productPrice))
    }
    catch (e) {

    }
}
