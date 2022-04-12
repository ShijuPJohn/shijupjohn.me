import React from "react";
import {Typography} from "@mui/material";
import {createUseStyles} from "react-jss";
import BackgroundAbout from "../../public/background_about2.jpg"
import Image from "next/image";
import AboutSampleImage from '../../public/about_sample.jpg'

const useStyles = createUseStyles({
    rootContainer: {
        width: "100%",
        height: 'calc(97vh - 1rem - 4vw)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "2rem",
    },
    rootContainerInsideBox: {
        width: "90%",
        height: 'calc(80vh - 1rem - 4vw)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "1rem",
        paddingLeft: "5rem",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "var(--grey-color)",
        borderRadius: "5px",
        position: "relative",
    },
    aboutImage: {},
    aboutImageContainer: {
        position: "absolute",
        top: "4rem",
        right: "15rem",
        width: "25rem",
        boxShadow: "12px 7px 16px -4px rgba(0,0,0,0.58)",
        fontSize: "0"
    },
    sectionTitle: {
        fontSize: "4rem",
        fontWeight: "bold",
        borderBottom: "solid",
        borderBottomColor: "var(--secondary-color)",
        paddingBottom: "1rem",
        borderBottomWidth: ".5rem",
        marginBottom: "2rem",
        marginLeft: "3rem",
        color: "var(--grey-text)",
    },
    banner: {
        width: "95%",
        backgroundColor: "var(--primary-color)",
        padding: "2rem",
        marginBottom: "2.5rem"
    },
    bannerText: {
        fontFamily: "Raleway",
        fontSize: "2.3rem",
        color: "var(--grey-text)"
    },
    aboutTextOuterBox: {
        width: "90%"
    },
    aboutTextBox: {
        width: "63%",
        marginLeft: "2rem",
    },
    aboutText: {
        fontFamily: "Raleway",
        fontSize: "1.7rem"
    }
})

function AboutMe() {
    const classes = useStyles()
    return (
        <div className={classes.rootContainer} style={{backgroundImage: BackgroundAbout}}>
            <div className={classes.rootContainerInsideBox}>
                <div className={classes.aboutImageContainer}>
                    <Image src={AboutSampleImage} alt={""} className={classes.aboutImage}/>
                </div>
                <Typography variant={"h2"} className={classes.sectionTitle}>About me</Typography>
                <div className={classes.banner}>
                    <Typography variant={"body1"} className={classes.bannerText}> Full-Stack developer based out of
                        Kerala, India</Typography>
                </div>
                <div className={classes.aboutTextOuterBox}>
                    <div className={classes.aboutTextBox}>
                        <Typography variant={"body1"} className={classes.aboutText}>
                            <p>Hi,
                            </p>
                            <p>I&apos;m Shiju P John, a freelance full stack developer and an aspiring data
                                scientist.</p>
                            <p>I&apos; a polyglot developer who can work with many programming languages and frameworks.
                                I have experience in creating both frontend and backend applications. Also, I&apos;m an
                                aspiring data scientist who&apos;s doing a full time bachelor&apos;s degree program in
                                Programming and Data science.
                            </p>
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe