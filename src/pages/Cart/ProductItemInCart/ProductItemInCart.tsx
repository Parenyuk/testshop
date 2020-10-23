import React, {useEffect, useState, useReducer} from 'react';
import Grid from '@material-ui/core/Grid';
import {ButtonBase, IconButton, Typography} from '@material-ui/core';
import washingMachine from '../../../assets/images/washing_machine.jpg';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import {makeStyles, Theme} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {
    actions,
    addOneProductInCart,
    setProductPriceAndCountProductThunk,
    setProductPriceThunk
} from '../../../redux/cartPageReducer';


export const useProductItemInCartStyles = makeStyles((theme: Theme) => ({
    productImg: {
        width: 100,
        height: 100,
    },
    productInCart: {
        maxWidth: 500,
        margin: '25px 15px',
    }
}))

type PropsType = {
    productPrice: number
}


export const ProductItemInCart = () => {

    const classes = useProductItemInCartStyles();
    const totalPriceProduct = useSelector<AppStateType, number>(state => state.cartPage.totalPriceProduct);
    const productPrice = useSelector<AppStateType, number>(state => state.cartPage.productPrice);
    const productCountInCart = useSelector<AppStateType, number>(state => state.cartPage.productCountInCart);

    const dispatch = useDispatch();


    const count = totalPriceProduct / productPrice

    const [countProduct, setCountProduct] = useState<number>(count);




    // let addOneProduct = () => {
    //     setCountProduct(countProduct + 1);
    // }

    const [totalPrice, setTotalPrice ] = useState(totalPriceProduct)


    const addOneProduct = () => {
        debugger
       // dispatch(addOneProductInCart(productCountInCart + 1));
       //  dispatch(setProductPriceThunk(productPrice, ))

        setTotalPrice(totalPriceProduct+productPrice)

        dispatch(setProductPriceAndCountProductThunk( totalPrice,productCountInCart + 1))


    }

    let minusOneProduct = () => {
        return setCountProduct(countProduct - 1)
    }




    return (
        <div  className={classes.productInCart}>
            <Paper>
                <Grid container spacing={2} direction={'row'}>
                    <Grid item xs={4}>
                        <ButtonBase>
                            <img src={washingMachine} className={classes.productImg}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            name name name
                        </Typography>
                        {`${totalPriceProduct}$`}
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            <IconButton onClick={minusOneProduct} disabled={countProduct === 0}>
                                <RemoveIcon />
                            </IconButton>
                            {productCountInCart}
                            <IconButton onClick={addOneProduct}  >
                                <AddIcon/>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
