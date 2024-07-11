import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import { Link } from 'react-router-dom';


import { MdOutlineLocalPhone } from "react-icons/md";

const pages = ['Home', 'About', 'Services', 'Solutions', 'Portfolio', 'News', 'Contact_us'];

function CNavbare() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => { setAnchorElNav(null); };
    return (
        <>
            <AppBar position="static" sx={{ position: "absolute", top: "0px", width: "100%", boxShadow: "0px 0px 0px", zIndex: "9999", backgroundColor: "transparent" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            component="img"
                            sx={{
                                width: "100px",
                            }}
                            alt="The house from the offer."
                            src="https://demo18.houzez.co/wp-content/themes/houzez/img/logo-houzez-white.png"
                        />

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: "flex-end" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <Link
                                        to={page === "Home" ? "/" : `/${page}`}
                                        style={{ margin: "10px 5px", textDecoration: "none", color: 'black', display: 'block' }}
                                    >
                                        {page}
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-end" } }}>
                            {pages.map((page) => (
                                <Link
                                    to={page === "Home" ? "/" : `/${page}`}
                                    style={{ margin: "0px 10px", textDecoration: "none", color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Link>
                            ))}
                        </Box>
                        <Box sx={{ marginLeft: "10px", display: { xs: "none", md: "block" } }}>
                            <MdOutlineLocalPhone /> +1 (800) 987 6543
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default CNavbare;
