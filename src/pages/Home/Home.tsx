import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Button, Toolbar, Container, Grid, AppBar} from '@material-ui/core';
import {Product} from '../../components/Product/Product';







export const Home = () => {


    // const classes = useHomeStyles();



    return (
        <div>

            <Container fixed>
                <Grid container spacing={1}>
                    <Grid item  xs={4} >
                        <Product productPrice={300} />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product productPrice={300} />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product productPrice={300} />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product productPrice={300} />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product productPrice={300} />
                    </Grid>
                    <Grid item  xs={4} >
                        <Product productPrice={300} />
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}
