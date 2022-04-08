import Head from 'next/head'
import React from 'react'
import {createUseStyles} from "react-jss";
import {faFacebookF, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from "next/image";
import LogoImage from "../public/logo-01.jpg"

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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'var(--primary-color)'
    },
    side_nav_content_logo: {
        width: 'calc(5vw + 3vh)',
        position: 'relative',
    },
    logo_image: {},
    social_ul: {},
    social_button: {
        display: 'block',
        color: '#d1d1d1',
        margin: '2rem 0',
        fontSize: 'calc(1rem + 1.3vw)',
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
    main_nav_hamburger: {},
    line: {},
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
        fontSize: "calc(1rem + .667vw)",
        margin: "1rem calc(1rem + 1vw)",
        position: "relative",
        '&::after': {
            content: "''",
            position: "absolute",
            backgroundColor: "white",
            bottom: "0",
            left:"0",
            width: "100%",
            height: ".25rem",
            display: "inline-block",
            transform: "scaleX(0)",
            transition:"all .5s",
            transformOrigin:"right",
        },
        '&::before': {
            content: "''",
            position: "absolute",
            backgroundColor: "white",
            top: "0",
            left:"0",
            width: "100%",
            height: ".25rem",
            display: "inline-block",
            transform: "scaleX(0)",
            transition:"all .5s",
            transformOrigin:"left",
        },
        '&:hover::after': {
            transform: "scaleX(1)",

        },
        '&:hover::before': {
            transform: "scaleX(1)",

        },

    },


})

function Home() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Head>
                <title>SHIJU P JOHN</title>
            </Head>
            <div className={classes.root_container}>

                {/* Side Nav */}
                <div className={classes.side_nav}>
                    <div className={classes.side_nav_content}>
                        <div className={classes.side_nav_content_logo}>
                            <Image src={LogoImage} className={classes.logo_image}
                                   alt={"logo"} objectFit={"cover"}/>
                        </div>
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
                    <header className={classes.header}>
                        <nav className={classes.header_nav}>
                            {/*<div className={classes.main_nav_hamburger}>*/}
                            {/*    <div className={`${classes.line} ${classes.line1}`}>Home</div>*/}
                            {/*    <div className={`${classes.line} ${classes.line2}`}>Home</div>*/}
                            {/*    <div className={`${classes.line} ${classes.line3}`}>Home</div>*/}
                            {/*    <div className={`${classes.line} ${classes.line4}`}>Home</div>*/}
                            {/*</div>*/}
                            <ul className={classes.nav_ul}>
                                <li><a className={classes.nav_btn} href="#">Home</a></li>
                                <li><a className={classes.nav_btn} href="#">About</a></li>
                                <li><a className={classes.nav_btn} href="#">Projects</a></li>
                                <li><a className={classes.nav_btn} href="#">Services</a></li>
                                <li><a className={classes.nav_btn} href="#">Hire me</a></li>
                            </ul>
                        </nav>
                    </header>

                </main>
            </div>
        </React.Fragment>
    )
}

export default Home
