import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function MenuAppBar() {
    const { authenticated } = useContext(AuthContext);

    return (
          <AppBar position="static" sx={{background: 'black', color: 'white'}}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Car Catalog
              </Typography>
              {!authenticated && (<Link to="/login"><Typography sx={{color: 'white'}}>LOGIN</Typography></Link>)}
              {authenticated && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              )}
            </Toolbar>
          </AppBar>
      );
}
