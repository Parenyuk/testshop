import React, {useState} from 'react';
import {ProductItemInCart} from './ProductItemInCart/ProductItemInCart';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {makeStyles, Theme} from '@material-ui/core/styles';


export const useCartStyles = makeStyles((theme: Theme) => ({
    totalPrice: {
        margin: 15,
    }
}))


export const Cart = () => {

    const classes = useCartStyles()

    const totalPriceProduct = useSelector<AppStateType, number>(state => state.cartPage.totalPriceProduct)

    return (
        <div>
            <ProductItemInCart productPrice={300} />
            <div className={classes.totalPrice}>
                Total:  {`${totalPriceProduct}$`}
            </div>
        </div>
    )
}

