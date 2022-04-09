import Head from 'next/head'
import React, {useState} from 'react'
import {createUseStyles} from "react-jss";
import {faFacebookF, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Icon, useMediaQuery, useTheme} from "@mui/material";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import ClearIcon from '@mui/icons-material/Clear';

const useStyles = createUseStyles({
    root_container: {
        display: 'flex',
    },
    side_nav: {
        position: 'sticky',
        top: '0',
        left: '0',
        height: '100vh',
    },
    side_nav_content: {
        width: 'calc(3vw + 3vh)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'var(--primary-color)'
    },
    side_nav_content_logo: {
        width: 'calc(5vw + 3vh)',
        position: 'relative',
        backgroundColor: "blue",
    },
    logo_image: {},
    social_ul: {},
    social_button: {
        display: 'block',
        color: '#d1d1d1',
        margin: 'calc(2rem + .7vw) 0',
        fontSize: 'calc(1rem + 1.1vw)',
        transition: '.2s',
        "&:hover": {
            color: '#ded18a',
            transform: 'scale(1.2)',
        }
    },

    main: {
        flex: 1,

    },
    header: {
        backgroundColor: "var(--secondary-color)",
        height: 'calc(5vw + 3vh)',
        zIndex: 2,
    },
    header_nav: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    main_nav_hamburger: {
        width: "5rem",
        height: "5rem",
        position: "fixed",
        top: "2rem",
        right: "3rem",
        backgroundColor: "var(--secondary-color)",
        cursor: "pointer",
        borderRadius: "50%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        width: "2rem",
        backgroundColor: "white",
        height: ".3rem",
        margin: ".3rem",
    },
    line1: {},
    line2: {},
    line3: {},
    line4: {},
    nav_ul: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        listStyle: "none",
        color: "white",
    },
    nav_btn: {
        fontSize: "calc(1.2rem + .667vw)",
        margin: "1rem calc(1rem + 1vw)",
        position: "relative",
        '&::after': {
            content: "''",
            position: "absolute",
            backgroundColor: "white",
            bottom: "0",
            left: "0",
            width: "100%",
            height: ".25rem",
            display: "inline-block",
            transform: "scaleX(0)",
            transition: "all .5s",
            transformOrigin: "right",
        },
        '&::before': {
            content: "''",
            position: "absolute",
            backgroundColor: "white",
            top: "0",
            left: "0",
            width: "100%",
            height: ".25rem",
            display: "inline-block",
            transform: "scaleX(0)",
            transition: "all .5s",
            transformOrigin: "left",
        },
        '&:hover::after': {
            transform: "scaleX(1)",
        },
        '&:hover::before': {
            transform: "scaleX(1)",
        },
    },
    '@media screen and (max-width: 610px)': {
        header: {
            backgroundColor: "white",

        },
        nav_ul: {
            display: "flex",
            flexDirection: "column",
        }
    },
    side_menu: {
        width: "20rem",
        height: "100vh",
        float: "right",
        backgroundColor: "var(--secondary-color)",
        display: "flex",
        flexDirection: "column",
    },
    close_button_layer: {
        display: "flex",
        justifyContent: "flex-end",
    },
    rest_of_menu: {
        flexGrow:"1",
        backgroundColor:"teal",
    },
    menu_close_btn: {
        color:"white",
        fontSize: "4rem",
        margin: "2rem 3rem 0rem 0rem",
        cursor: "pointer",
    },
    nav_ul_menu:{
        flexGrow:"1",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        listStyle:"none",
        color:"white",
        '& li':{
            margin:"2rem",
        }

    }


})

function Home() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const [showMenu, setShowMenu] = useState(false)
    const classes = useStyles()
    const menuTapHandler = (e) => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }
    return (
        <React.Fragment>
            <Head>
                <title>SHIJU P JOHN</title>
            </Head>
            <div className={classes.root_container}>

                {/* Side Nav */}
                <div className={classes.side_nav}>
                    <div className={classes.side_nav_content}>
                        <ul className={classes.social_ul}>
                            <a className={classes.social_button} href="#">
                                <FontAwesomeIcon icon={faFacebookF}/></a>
                            <a className={classes.social_button} href="#">
                                <FontAwesomeIcon icon={faTwitter}/></a>
                            <a className={classes.social_button} href="#">
                                <FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </ul>
                    </div>
                </div>
                {/* Main Nav */}
                <main className={classes.main}>
                    {!matches && <header className={classes.header}>
                        <nav className={classes.header_nav}>
                            <ul className={classes.nav_ul}>
                                <li><a className={classes.nav_btn} href="#">Home</a></li>
                                <li><a className={classes.nav_btn} href="#">About</a></li>
                                <li><a className={classes.nav_btn} href="#">Projects</a></li>
                                <li><a className={classes.nav_btn} href="#">Services</a></li>
                                <li><a className={classes.nav_btn} href="#">Hire me</a></li>
                            </ul>
                        </nav>
                    </header>}
                    {matches && <div className={classes.header}>
                        {!showMenu && <div className={classes.main_nav_hamburger} onClick={menuTapHandler}>
                            <div className={classes.line}/>
                            <div className={classes.line}/>
                            <div className={classes.line}/>
                        </div>}
                        {showMenu && <div className={classes.side_menu}>
                            <div className={classes.close_button_layer}>
                                <ClearIcon className={classes.menu_close_btn}
                                      onClick={menuTapHandler} fontSize={"3rem"}/>
                            </div>
                                <ul className={classes.nav_ul_menu}>
                                    <li><a className={classes.nav_btn} href="#">Home</a></li>
                                    <li><a className={classes.nav_btn} href="#">About</a></li>
                                    <li><a className={classes.nav_btn} href="#">Projects</a></li>
                                    <li><a className={classes.nav_btn} href="#">Services</a></li>
                                    <li><a className={classes.nav_btn} href="#">Hire me</a></li>
                                </ul>
                        </div>}
                    </div>}

                </main>
            </div>
        </React.Fragment>
    )
}

export default Home
