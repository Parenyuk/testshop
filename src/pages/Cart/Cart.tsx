import React, {useState} from 'react';
import {ProductItemInCart} from './ProductItemInCart/ProductItemInCart';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {ConfirmOrderProduct} from './ConfirmOrderProduct/ConfirmOrderProduct';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


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
            <Grid container direction={'row'} >
                <Grid item xs={4} >
                    <ProductItemInCart  />
                    <div className={classes.totalPrice}>
                        Total:  {`${totalPriceProduct}$`}
                    </div>
                </Grid>
               <Grid item xs={5} >
                   <Card>
                       <ConfirmOrderProduct/>
                   </Card>

               </Grid>


            </Grid>
        </div>
    )
}

