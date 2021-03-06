import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import DataLink from "components/Links/ExternalLink";

import FooterData from "assets/data/components/footer";
import Colours from "assets/strings/colours";
import {email, phone, phone_string} from "assets/data/global";
import HiddenContainer from "../GridLayouts/HiddenContainer";

const useStyles = makeStyles({
    itemMargin: {
        margin: "2vh 0"
    },
    footerWidth: {
        maxWidth: "90%",
        margin: "0 auto",
    },
    footer: {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "25px",
        paddingLeft: "25px",
        width: "100%",
        "& h4, & h5": {
            color: Colours.white,
            textDecoration: "none"
        },
        position: "absolute",
        zIndex: "8"
    },
    footerBrand: {
        color: "white",
        margin: "0",
        "&:hover": {
            color: Colours.primary,
        }
    },
    dark: {
        background:
            "radial-gradient(ellipse at center," +
            Colours.grayColor[4] +
            " 0," +
            Colours.grayColor[5] +
            " 100%)",
        backgroundSize: "550% 450%",
        color: Colours.white,
        "& i": {
            color: Colours.white
        },
        "& a, & h3, & h5": {
            opacity: ".86",
            "&:visited": {
                color: Colours.white
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
    }
});

export default function Footer() {
    const classes = useStyles();
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes["dark"]]: true,
    });

    const leftRightContainer = (
        <Grid
            container
            direction={"row"}
            justify={"space-between"}
            alignContent={"center"}
            alignItems={"center"}
            className={classes.footerWidth}
        >
            <Grid item xs={12} md={4} className={classes.itemMargin}>
                <Grid
                    container
                    direction={"column"}
                    justify={"flex-start"}
                    alignItems={"flex-start"}
                >
                    <Grid item>
                        <h3 className={classes.footerBrand}>
                            {FooterData.left.header}
                        </h3>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.footerBrand}>
                            {FooterData.left.subHeader}
                        </h4>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} className={classes.itemMargin}>
                <Grid
                    container
                    direction={"column"}
                    justify={"flex-end"}
                    alignItems={"flex-end"}
                >
                    <Grid item>
                        <DataLink
                            data={email}
                            mail={true}
                            label={FooterData.right.email}
                        />
                    </Grid>
                    <Grid item>
                        <DataLink
                            data={phone}
                            mobile={true}
                            label={FooterData.right.phone}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

    const centerContainer = (
        <Grid
            container
            direction={"column"}
            justify={"space-between"}
            alignContent={"center"}
            alignItems={"center"}
        >
            <Grid item xs={12} sm={12} className={classes.itemMargin}>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item>
                        <h3 className={classes.footerBrand}>
                            {FooterData.left.header}
                        </h3>
                    </Grid>
                    <Grid item>
                        <h4 className={classes.footerBrand}>
                            {FooterData.left.subHeader}
                        </h4>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.itemMargin}>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item>
                        <DataLink
                            data={email}
                            mail={true}
                            label={FooterData.right.email}
                        />
                    </Grid>
                    <Grid item>
                        <DataLink
                            data={phone_string}
                            mobile={true}
                            label={FooterData.right.phone}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

    return (
        <footer className={footerClasses}>
            <HiddenContainer
                smallPanel={centerContainer}
                largePanel={leftRightContainer}
            />
        </footer>
    )
}
