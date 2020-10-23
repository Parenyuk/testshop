import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Button, Toolbar, Container, Grid, AppBar} from '@material-ui/core';
import {Product} from '../../components/Product/Product';
import {Link} from 'react-router-dom';




// export const useHomeStyles = makeStyles((theme: Theme) => ({
//     toolbar: {
//         backgroundColor: theme.palette.primary.main,
//     },
//     cartButton: {
//         backgroundColor: theme.palette.secondary.main,
//         marginLeft: '90%',
//         listStyleType: 'none',
//         textDecoration: 'none'
//     }
// }))



export const Home = () => {


    // const classes = useHomeStyles();



    return (
        <div>
            {/*<AppBar position='static' >*/}
            {/*<Toolbar className={classes.toolbar} >*/}
            {/*    Home*/}
            {/*    <Link to='/cart' className={classes.cartButton}>*/}
            {/*        <Button >Cart </Button>*/}
            {/*    </Link>*/}
            {/*</Toolbar>*/}
            {/*</AppBar>*/}
            <Container fixed>
                <Grid container spacing={1}>
                    <Grid item  xs={4} >
                        <Product/>
                    </Grid>
                    <Grid item  xs={4} >
                        <Product/>
                    </Grid>
                    <Grid item  xs={4} >
                        <Product/>
                    </Grid>
                    <Grid item  xs={4} >
                        <Product/>
                    </Grid>
                    <Grid item  xs={4} >
                        <Product/>
                    </Grid>
                    <Grid item  xs={4} >
                        <Product/>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}
