import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import RadioOutLinedIcon from '@mui/icons-material/RadioOutLined';
import ExploreOutLinedIcon from '@mui/icons-material/ExploreOutLined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import { Icon } from '@mui/material';

interface Props {
    window?: () => Window;
}


export default function Navbar(props: Props) {
    const pages = [
        {
            title: 'Highlights',
            url: 'highlights',
            icon: <RadioOutLinedIcon className={styles['icon-item-menu']} />,
        },
        {
            title: 'Explore',
            url: 'explore',
            icon: <ExploreOutLinedIcon className={styles['icon-item-menu']} />,
        },
        {
            title: 'Communities',
            url: 'products',
            icon: <PeopleOutlinedIcon className={styles['icon-item-menu']} />,
        },
        {
            title: 'Record Settings',
            url: 'record-settings',
            icon: <SettingsOutlinedIcon className={styles['icon-item-menu']} />,
        }
    ];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" className={styles.navbar}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters className={styles['navbar-container']}>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className={styles['logo-web']}
                    >
                        LOGO
                    </Typography>



                    <Box className={styles['menu-mobile']}>
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
                            className={styles['xs-block-md-none']}
                        >
                            {pages.map((page) => (

                                <MenuItem key={page.url} onClick={handleCloseNavMenu} >
                                    <Link href={page.url}>
                                        <Typography textAlign="center" >{page.title}</Typography>
                                    </Link>

                                </MenuItem>

                            ))}
                        </Menu>
                    </Box>
                    <Link
                        href="/"
                        className={styles['logo-mobile']}
                    >
                        LOGO
                    </Link>
                    <Box className={styles['menu-web']}>
                        {pages.map((page) => (
                            <Link href={page.url} key={page.url} className={styles['item-menu']}>
                                {/* <Box
                                    key={page.url}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white' }}
                                    variant="outlined" startIcon={page.icon}
                                 
                                > */}
                                {page.icon}
                                <Typography className={styles['title-item-menu']}>
                                    {page.title}
                                </Typography>

                                {/* </Box> */}
                            </Link>

                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/86542102" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >)
}



