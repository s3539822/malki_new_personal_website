import React from "react";
import classNames from "classnames"

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import ProfessionalProfile from "page-sections/landing-page/ProfessionalProfile";
import Qualifications from "page-sections/landing-page/Qualifications";
import TreatmentApproach from "page-sections/landing-page/TreatmentApproach";
import GeneralInfo from "page-sections/landing-page/GeneralInfo";

import SectionSpacer from "components/Icons/SectionSpacer";

import data from "assets/data/pages/landing-data"
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    padding: {
        padding: "3vh 0",
        display: "absolute",
        zIndex: "7",
    },
    baseBackground: {
        backgroundColor: Colours.grayColor[2],
    },
});

/**
 * Landing Page Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function LandingPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout
                image={data.core.background}
                header={data.core.header}
                body={data.core.body}
                alt={data.core.alt}
            >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item className={classNames(classes.padding, classes.baseBackground)}>
                        <ProfessionalProfile
                            data={data.aboutMe.about}
                            avatar={data.aboutMe.avatar}
                        />
                    </Grid>
                    <SectionSpacer />
                    <Grid item className={classNames(classes.padding, classes.baseBackground)}>
                        <Qualifications
                            qualifications={data.qualifications}
                            specialities={data.specialities}
                        />
                    </Grid>
                    <SectionSpacer />
                    <Grid item className={classNames(classes.padding, classes.baseBackground)}>
                        <TreatmentApproach
                            treatmentApproach={data.treatmentApproach}
                            languages={data.languages}
                        />
                    </Grid>
                    <Grid item className={classNames(classes.padding, classes.baseBackground)}>
                        <GeneralInfo
                            header={data.generalInfo.header}
                            para={data.generalInfo.para}
                        />
                    </Grid>
                </Grid>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
