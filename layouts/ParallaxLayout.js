import React from "react";
import PropTypes from "prop-types"
import classNames from "classnames"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import Parallax from "components/Parallax/Parallax";

import { extraSmallFont, largeFont, smallFont } from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

import useIsTouchDevice from "../util/device-detect";

const useStyles = makeStyles({
    container: {
        color: Colours.white,
        paddingRight: "15px",
        paddingLeft: "15px",
        paddingBottom: "25px",
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "1200px",
        zIndex: "2",
    },
    mobileMargin: {
        marginTop: "-280px",
    },
    desktopMargin: {
        marginTop: "-380px",
    },
    wide: {
        width: "65vw",
        minWidth: "300px",
    },
    title: {
        ...largeFont,
        fontWeight: "700",
        color: Colours.white,
        textDecoration: "none",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "30px",
        marginBottom: "5px",
        minHeight: "32px",
        textShadow: ".5px .5px black",
    },
    titleSubHeading: {
        ...smallFont,
        fontWeight: "400",
        color: Colours.white,
        textDecoration: "none",
        textTransform: "uppercase",
        textAlign: "center",
        margin: "10px 0 0 0",
        textShadow: ".5px .5px black",
    },
    italics: {
        /*fontStyle: "italic",*/
        ...extraSmallFont,
        fontWeight: "450",
        marginTop: "15px",
        /*marginBottom: "-25px",*/
        textShadow: ".5px .5px black",
    },
    greenHr: {
        borderTop: `7px solid ${Colours.blue}`,
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "0",
        marginBottom: "0",
    },
})

export default function ParallaxLayout(props) {
    const {children, image, header, body, alt} = props
    const classes = useStyles()

    const containerClasses = classNames({
        [classes.container]: true,
        [classes.wide]: true,
        [classes.mobileMargin]: useIsTouchDevice(),
        [classes.desktopMargin]: !useIsTouchDevice(),
    })

    const panelContent = () => (
        <div className={containerClasses}>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignContent={"stretch"}
            >
                <Grid item>
                    <h1 className={classes.title}>{header}</h1>
                </Grid>
                <Grid item>
                    <h4 className={classes.titleSubHeading}>
                        {body}
                    </h4>
                </Grid>
                <Grid item>
                    <h4 className={classNames(classes.titleSubHeading, classes.italics)}>
                        {alt}
                    </h4>
                </Grid>
                <Grid item>
                    <hr size={30} className={classes.greenHr}/>
                </Grid>
            </Grid>
        </div>
    )

    return (
        <>
            <Parallax image={image} filter="dark">
                {panelContent()}
            </Parallax>
            {children}
        </>
    )
}

ParallaxLayout.propTypes = {
    image: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}
