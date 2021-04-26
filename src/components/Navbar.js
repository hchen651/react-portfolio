// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

// Custom Component
import ButtonNavLogo from "./ButtonNavLogo";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        background: "#222",
        margin: 0,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
    fullWidth: {
        width: "100vw",
    },
    underlineSpan: {
        color: 'tan',
        '&:hover, &:focus, &:active': {
            backgroundRepeat: "repeat-x",
            backgroundImage: "url(./nav-squiggle.svg)",
            backgroundPosition: "0 1.06em",
            backgroundSize: "28px 9px",
        }
    },
}))

export default function NavbarMain() {
    const classes = useStyles(); 

    const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileAnchorEl(null);
    };

    // Mobile Responsive Menu ==============
    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }
    const mobileMenuId = 'menu-mobile';
    const renderMobileMenu = (
        <Drawer
            anchor="left"
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Toolbar className={classes.fullWidth}>
                <IconButton
                    onClick={handleMobileMenuClose}
                >
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <ButtonNavLogo
                    href="/"
                >
                    Henry Chen
                </ButtonNavLogo>
            </Toolbar>

            <List>
                <ListItemLink href="/service-produce">
                    <ListItemText disableTypography>
                        <Typography variant="h6" color="textPrimary">
                            Produce & Compost
                        </Typography>
                    </ListItemText>
                </ListItemLink>
                <ListItemLink href="/service-compost">
                    <ListItemText disableTypography>
                        <Typography variant="h6" color="textPrimary">
                            Compost Only
                        </Typography>
                    </ListItemText>
                </ListItemLink>
                <ListItemLink href="/our-locations">
                    <ListItemText disableTypography>
                        <Typography variant="h6" color="textPrimary">
                            Our Locations
                        </Typography>
                    </ListItemText>
                </ListItemLink>
                <ListItemLink href="/how-it-works">
                    <ListItemText disableTypography>
                        <Typography variant="h6" color="textPrimary">
                            How It Works
                        </Typography>
                    </ListItemText>
                </ListItemLink>
            </List>
            <Divider variant="middle" />
            <List>
                <ListItemLink href="/our-story">
                    <ListItemText disableTypography>
                        <Typography variant="h6" color="textPrimary">
                            Our Story
                        </Typography>
                    </ListItemText>
                </ListItemLink>
                <ListItemLink href="/donate">
                    <ListItemText disableTypography>
                        <Typography variant="h6" color="textPrimary">
                            Donate
                        </Typography>
                    </ListItemText>
                </ListItemLink>
            </List>
            <Divider variant="middle" />
            <Box align="center" mt={2}>
                <Button href="/login" color="blue">
                    Log in
                </Button>
            </Box>
        </Drawer>
    );

    return (
        <header className={classes.root}>
            {/* <ScrollToColor> */}
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        {/* Render Mobile Menu when matching width criteria */}
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-controls={mobileMenuId}
                                onClick={handleMobileMenuOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>

                        <Box flexGrow={1}>
                            <ButtonNavLogo
                                href="/"
                            >
                                Henry Chen
                            </ButtonNavLogo>
                        </Box>

                        <div className={classes.sectionDesktop}>
                            <Button
                                href="/about"
                            >
                                <span className={classes.underlineSpan}>About Me</span>
                            </Button>
                            <Button 
                                href="/portfolio"
                            >
                                <span className={classes.underlineSpan}>Portfolio</span>
                            </Button>
                            <Button
                                href="/resume"
                            >
                                <span className={classes.underlineSpan}>Resume</span>
                            </Button>
                            <Button 
                                href="/contact"
                            >
                                <span className={classes.underlineSpan}>Contact</span>
                            </Button>

                        </div>
                    </Toolbar>
                </AppBar>
            {/* </ScrollToColor> */}
            {/* Listen to click events to render corresponding dropdown menus */}
            { renderMobileMenu }
        </header>
    )
}