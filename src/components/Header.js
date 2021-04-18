import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <h3>GlobalState</h3>
                <Link to="/"><h3>Top:</h3></Link>
                <Link to="SecondPage"><h3>Second </h3></Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header
