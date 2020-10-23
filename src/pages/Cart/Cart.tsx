import React, {useState} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {ButtonBase, CardActionArea, CardContent, IconButton, Typography} from '@material-ui/core';
import washingMachine from './../../assets/images/washing_machine.jpg'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export const useCartStyles = makeStyles((theme: Theme) => ({
    productImg: {
        width: 100,
        height: 100,
    },
    productInCart: {
        maxWidth: 500,
        margin: '25px 15px',
    }
}))

export const Cart = () => {
    const classes = useCartStyles();

    const [countProductCart, setCountProductCart] = useState<number>(0);

    let addOneProductCart = () => {
        return setCountProductCart(countProductCart + 1)
    }
    let minusOneProductCart = () => {
        return setCountProductCart(countProductCart - 1)
    }

    return (
        <div className={classes.productInCart}>
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
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>
                            <IconButton onClick={addOneProductCart} >
                                <AddIcon/>
                            </IconButton>
                            {countProductCart}
                            <IconButton onClick={minusOneProductCart} >
                                <RemoveIcon />
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

