import Head from 'next/head'
import React, {useState} from 'react'
import {createUseStyles} from "react-jss";
import {faFacebookF, faGithub, faHackerrank, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import Image from "next/image";
import HeroImage from '../public/hero2.jpg'
import {teal} from "@mui/material/colors";

const useStyles = createUseStyles({
    root_container: {
        display: 'flex',
    },
    side_nav: {
        position: 'sticky',
        top: '0',
        left: '0',
        height: '100%',
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
        color: '#ebebeb',
        margin: 'calc(2rem + .7vw) 0',
        fontSize: 'calc(1rem + 1.1vw)',
        transition: '.2s',
        "&:hover": {
            color: '#ff7091',
            transform: 'scale(1.2)',
        }
    },

    main: {
        flex: 1,

    },
    header: {
        backgroundColor: "rgba(140, 140, 140,1)",
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
        borderStyle: "solid",
        borderColor: "var(--secondary-color)",
        borderWidth: "1px",
        borderRadius: "5px",
        cursor: "pointer",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        animationName: '$fadeIn',
        animationDuration: '.5s',
        animationTimingFunction: 'linear',
    },
    line: {
        width: "2rem",
        backgroundColor: "var(--secondary-color)",
        height: ".3rem",
        margin: ".3rem",
    },
    nav_ul: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        listStyle: "none",
        color: "white",
    },
    nav_btn: {
        fontSize: "calc(1.2rem + .55vw)",
        textTransform:"uppercase",
        margin: "1rem calc(1rem + 1vw)",
        position: "relative",
        color:"var(--secondary-color)",
        '&::after': {
            content: "''",
            position: "absolute",
            backgroundColor: "var(--secondary-color)",
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
            backgroundColor: "var(--secondary-color)",
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
            position:"relative",

        },
        nav_ul: {
            display: "flex",
            flexDirection: "column",
        }
    },
    side_menuIn: {
        opacity:".9",
        width: "20rem",
        height: "100vh",
        float: "right",
        backgroundColor: "rgba(140, 140, 140,1)",
        position:"absolute",
        right:"0",
        display: "flex",
        flexDirection: "column",
        animationName: '$fadeIn',
        animationDuration: '.5s',
        animationTimingFunction: 'linear',
    },
    side_menuOut: {
        opacity:".9",
        position:"absolute",
        width: "20rem",
        height: "100vh",
        float: "right",
        right:"0",
        backgroundColor: "rgba(140, 140, 140,1)",
        display: "flex",
        flexDirection: "column",
        animationName: '$fadeOut',
        animationDuration: '.5s',
        animationTimingFunction: 'linear',
    },
    '@keyframes fadeIn': {
        from: {
            opacity: 0,
        },
        to: {
            opacity: .85,
        }
    },
    '@keyframes fadeOut': {
        from: {
            opacity: .85,
        },
        to: {
            opacity: 0,
        }
    },

    close_button_layer: {
        display: "flex",
        justifyContent: "flex-end",
    },
    rest_of_menu: {
        flexGrow: "1",
        backgroundColor: "teal",
    },
    menu_close_btn: {
        color: "white",
        fontSize: "4rem",
        margin: "2rem 3rem 0rem 0rem",
        cursor: "pointer",
    },
    nav_ul_menu: {
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        color: "white",
        '& li': {
            margin: "2rem",
        }

    },
    hero_section: {
        width: "calc(97vw - 3vh)",
        height: 'calc(97vh - 5vw)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    hero_box: {
        marginTop: "-20rem",
        width: "80vw",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative",
    },
    '@keyframes moveInLeft': {
        from: {
            opacity: "0",
            marginLeft: "-50rem",
        },
        to: {
            opacity: "1",
            marginLeft: "0",
        }
    },
    '@keyframes moveInRight': {
        from: {
            opacity: "0",
            marginLeft: "50rem",
        },
        to: {
            opacity: "1",
            marginLeft: "0",
        }
    },
    '@keyframes moveInTop': {
        from: {
            opacity: "0",
            marginTop: "-50rem",
        },
        to: {
            opacity: "1.1",
            marginTop: "0",
        }
    },
    hero_image_container: {

    },


    hero_image: {
        display: "block",

    },
    hero_banner: {
        backgroundColor: "var(--primary-color)",
        width: "60vw",
        height: "35%",
        display: "flex",
        padding: "3rem 3rem",
        fontSize: "2rem",
    },
    hero_banner_text_box: {
        marginRight: "7.5rem",
    },
    hero_banner_title_main: {
        textTransform: "uppercase",
        color: "#404040",
        display: "inline-block",
        fontSize: "3.5rem"
    },
    hero_banner_title_main2: {
        textTransform: "uppercase",
        color: "#404040",
        display: "block",
        fontSize: "1.5rem"
    },
    hero_banner_title_sub: {},
    name_greet_outer_box: {
        width: "70%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1rem",
    },
    name_greet_inner_box: {
        marginRight: "5.5rem",
    },
    greet_name: {
        textTransform: "uppercase",
        color: "var(--secondary-color)",
        fontSize: "4.5rem",
    },
    greet_hi: {
        color: "#707070",
    },
    [`@media (min-width: ${900}px)`]: {
        hero_banner: {
            animationName: "$moveInRight",
            animationDuration: "2s",
            animationTimingFunction: "ease-out",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            width:"60vw",
        },
        name_greet_inner_box: {
            animationName: "$moveInTop",
            animationDuration: "2s",
            animationTimingFunction: "ease-out",
        },
        hero_banner_title_main2:{
            letterSpacing:".12rem"
        },
        hero_image_container: {
            zIndex:"2",
            display: "block",
            width: "calc(5rem + 17vw)",
            boxShadow: "12px 7px 16px -4px rgba(0,0,0,0.58)",
            backgroundColor: "teal",
            fontSize: "0",
            position:"absolute",
            left: "calc(12rem + 6vw )",
            top: "30%",
            animationName: "$moveInLeft",
            animationDuration: "2s",
            animationTimingFunction: "ease-out",
            transition: "all 1s",
            '&:hover': {
                transform: "scale(1.1)"
            },
        },
    },
    [`@media (max-width: ${1200}px)`]: {
        hero_image_container: {
            width: "18vw",
            left:"11rem"
        },
    },
    [`@media (max-width: ${1000}px)`]: {
        hero_image_container: {
            width: "15vw",
            left:"11rem"
        },
    },
    [`@media (max-width: ${900}px)`]: {
        hero_banner:{
            justifyContent:"center",
            width: "55vw",
        },
        hero_image_container: {
            width: "26rem",
            left:"10rem"
        },
        hero_box: {
            marginTop: "16rem",
            width: "80vw",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "relative",
        },
        name_greet_inner_box: {
            margin:"0",
        },
        name_greet_outer_box: {
            marginRight: "0",
            marginBottom:"1rem",
            justifyContent:"center",
        },
        hero_banner_text_box:{
            textAlign:"center",
            margin:"0",
        },
        greet_name:{
            fontSize:"4rem"
        },
        hero_banner_title_main2:{
            letterSpacing:".1rem"
        }
    },

    [`@media (max-width: ${700}px)`]: {
        hero_image_container: {
            width: "30rem",
            left:"10rem",
            top:"55vh",
            marginBottom: "1rem",
        },
        name_greet_outer_box: {
            justifyContent: "center",
            animationName:"none",
            width:"85vw"
        },
        hero_banner:{
            // clipPath: "none",
            width:"35rem"
        },
        hero_banner_text_box:{
            width:"30rem"
        },
        greet_name:{
            fontSize:"4rem"
        },
        greet_hi:{
            fontSize:"3rem"
        },
        hero_box:{
            marginTop:"calc(2rem + 15vh)",
        },
        hero_banner_title_main:{
            fontSize:"3rem",
        },
        hero_banner_title_main2:{
            fontSize:"1.3rem",
            letterSpacing: ".1rem"
        }
    },


})

function Home() {
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const [showMenu, setShowMenu] = useState(false)
    const [animeOut, setAnimeOut] = useState(false)
    const classes = useStyles()

    const menuOpenHandler = (e) => {
        setShowMenu((pVal) => !pVal)
    }
    const menuCloseHandler = async (e) => {
        setAnimeOut(true)
        await new Promise(r => setTimeout(r, 500))
        setAnimeOut(false)
        setShowMenu((pVal) => !pVal)
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
                            <a className={classes.social_button} href="#">
                                <FontAwesomeIcon icon={faGithub}/></a>
                            <a className={classes.social_button} href="#">
                                <FontAwesomeIcon icon={faHackerrank}/></a>
                        </ul>
                    </div>
                </div>
                {/* Main Nav */}
                <main className={classes.main}>
                    {!matchesSM && <header className={classes.header}>
                        <nav className={classes.header_nav}>
                            <ul className={classes.nav_ul}>
                                <li><a className={classes.nav_btn} href="#">Home</a></li>
                                <li><a className={classes.nav_btn} href="#">About</a></li>
                                <li><a className={classes.nav_btn} href="#">Projects</a></li>
                                <li><a className={classes.nav_btn} href="#">Hire me</a></li>
                            </ul>
                        </nav>
                    </header>}
                    {matchesSM && <div className={classes.header}>
                        {!showMenu && <div className={classes.main_nav_hamburger} onClick={menuOpenHandler}>
                            <div className={classes.line}/>
                            <div className={classes.line}/>
                            <div className={classes.line}/>
                        </div>}
                        {showMenu && <div className={!animeOut ? classes.side_menuIn : classes.side_menuOut}>
                            <div className={classes.close_button_layer}>
                                <ClearIcon className={classes.menu_close_btn}
                                           onClick={menuCloseHandler} fontSize={"3rem"}/>
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
                    <section className={classes.hero_section}>
                        <div className={classes.hero_box}>
                            <div className={classes.name_greet_outer_box}>
                                <div className={classes.name_greet_inner_box}>
                                    <Typography variant={"h2"} className={classes.greet_hi}>Hi, I am</Typography>
                                    <Typography variant={"h2"} className={classes.greet_name}
                                                style={{fontWeight: "bold"}}>Shiju P John</Typography>
                                </div>
                            </div>
                            <div className={classes.hero_image_container}>
                                <Image src={HeroImage} className={classes.hero_image} alt={""} objectFit={"cover"}/>
                            </div>
                            <div className={classes.hero_banner}>
                                <div className={classes.hero_banner_text_box}>
                                    <Typography variant={"h3"}
                                                className={classes.hero_banner_title_main}>Full Stack Dev</Typography>
                                    <Typography  variant={"h3"}
                                                className={classes.hero_banner_title_main2}>and an aspiring data
                                        scientist</Typography>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Home
