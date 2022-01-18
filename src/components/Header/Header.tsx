import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.scss';

const Header = () => {
    return (
        <div className="header-container">
            <Container maxWidth="xl">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            News
                        </Typography>
                        <div color="inherit">Login</div>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    )
}

export default Header;
