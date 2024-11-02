import React from 'react';
import {AppBar, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Asynchronous from "./test/Asynchronous";

function AppAppBar() {
    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Container maxWidth="lg">
                    <Toolbar>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            Фильмы ёпта
                        </Typography>
                        <Asynchronous />
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar/>
        </React.Fragment>
    );
}

export default AppAppBar;