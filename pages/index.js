import Head from 'next/head'
import React, {useState} from 'react'
import {createUseStyles} from "react-jss";
import {faFacebookF, faGithub, faHackerrank, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import Image from "next/image";
import HeroImage from '../public/hero2.jpg'

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
        backgroundColor: "rgba(209, 67, 100,.8)",
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
    side_menuIn: {
        width: "20rem",
        height: "100vh",
        float: "right",
        backgroundColor: "rgba(209, 67, 100,.8)",
        display: "flex",
        flexDirection: "column",
        animationName: '$fadeIn',
        animationDuration: '.5s',
        animationTimingFunction: 'linear',
    },
    side_menuOut: {
        width: "20rem",
        height: "100vh",
        float: "right",
        backgroundColor: "rgba(209, 67, 100,.7)",
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
            opacity: .7,
        }
    },
    '@keyframes fadeOut': {
        from: {
            opacity: .7,
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
        marginTop:"-20rem",
        width: "80vw",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        position:"relative",
    },
    hero_image_container: {
        display: "block",
        width: "calc(5rem + 17vw)",
        boxShadow: "12px 7px 16px -4px rgba(0,0,0,0.58)",
        backgroundColor: "teal",
        fontSize: "0",
        position:"absolute",
        left:"20%",
        top:"30%",
    },
    hero_image: {
        display: "block",

    },
    hero_banner: {
        backgroundColor: "var(--primary-color)",
        width: "70%",
        height:"25%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
        padding: "3rem 3rem",
        fontSize:"2rem"
    },
    hero_banner_title_main: {
        fontSize: "1rem",
        textTransform:"uppercase",
        color:"#404040"
    },
    hero_banner_title_sub: {},
    name_greet_outer_box:{
        width:"70%",
        display:"flex",
        justifyContent:"flex-end",
        marginBottom:"1rem",
    },
    name_greet_inner_box:{
        marginRight:"10rem",
    },
    greet_name:{
        textTransform:"uppercase",
        color:"var(--secondary-color)",
    },
    greet_hi:{

    }

})

function Home() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
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
                                  <Typography variant={"h2"} className={classes.greet_name} style={{fontWeight:"bold"}}>Shiju P John</Typography>
                              </div>
                            </div>
                            <div className={classes.hero_banner}>
                                <Typography style={{fontSize:"3rem"}} variant={"h3"} className={classes.hero_banner_title_main}>Full Stack Web
                                    Dev</Typography>
                            </div>
                            <div className={classes.hero_image_container}>
                                <Image src={HeroImage} className={classes.hero_image} alt={""} objectFit={"cover"}/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Home
