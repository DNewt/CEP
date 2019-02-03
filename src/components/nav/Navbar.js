import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Navbar extends Component {

    render() {
        return (
            <AppBar>
                <Toolbar>
                    {/* <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton> */}
                    <Typography variant="h6" color="inherit" noWrap>
                        Cost Estimation Program
              </Typography>
                    <div style={{ marginLeft: 20 }}>
                        <Link to={"/dashboard/projects"} style={{ textDecoration: 'none', color: 'white' }}>
                            <Button color="inherit">Projects</Button>
                        </Link>
                        <Link to={"/dashboard/items"} style={{ textDecoration: 'none', color: 'white' }}>
                            <Button color="inherit">Items</Button>
                        </Link>
                    </div>

                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;