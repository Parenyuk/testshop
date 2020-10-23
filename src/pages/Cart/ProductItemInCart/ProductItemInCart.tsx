import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {ButtonBase, IconButton, Typography} from '@material-ui/core';
import washingMachine from '../../../assets/images/washing_machine.jpg';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import {makeStyles, Theme} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/store';


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

// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         default:
//             throw new Error();
//     }
// }

export const ProductItemInCart = ({productPrice}: PropsType) => {

    const classes = useProductItemInCartStyles();
    const totalPriceProduct = useSelector<AppStateType, number>(state => state.cartPage.totalPriceProduct)


    const count = totalPriceProduct / productPrice

    const [countProduct, setCountProduct] = useState<number>(count);

    const [price, setProductPrice] = useState(productPrice);

    let addOneProduct = () => {
        setCountProduct(countProduct + 1);
        setProductPrice(productPrice+price)

    }


    let minusOneProduct = () => {
        return setCountProduct(countProduct - 1)
    }


    // const [state, dispatch] = useReducer(reducer, initialState);


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
                            {countProduct}
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
