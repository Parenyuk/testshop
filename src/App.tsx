import React from 'react';
import './App.css';
import {Home} from './pages/Home/Home';
import {Route, Switch} from 'react-router';
import {Cart} from './pages/Cart/Cart';
import {AppBar, Button, IconButton, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {makeStyles, Theme} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

export const useAppStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: theme.palette.primary.main,
    },
    linkButtonToHome: {
        // backgroundColor: theme.palette.secondary.main,
        // marginLeft: '90%',

        textDecoration: 'none'
    },
    linkButtonToCart: {
        backgroundColor: theme.palette.secondary.main,
        marginLeft: '90%',
        textDecoration: 'none'
    }
}))

function App() {

    const classes = useAppStyles()

  return (
    <div>
        <AppBar position='static' className={classes.toolbar} >
            <Toolbar>
                <Link to='/home' className={classes.linkButtonToHome} >
                    <IconButton>
                        <HomeIcon fontSize={'large'} />
                    </IconButton>
                </Link>
                <Link to='/cart' className={classes.linkButtonToCart} >
                    <Button >Cart </Button>
                </Link>
            </Toolbar>
        </AppBar>
      <Switch>
          <Route exact path={'/home'} component={Home} />
          <Route path={'/cart'} component={Cart}  />
      </Switch>
    </div>
  );
}

export default App;
