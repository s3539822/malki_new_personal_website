import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { hexToRgb } from "assets/jss/nextjs-material-kit-pro";
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: Colours.grayColor[0],
    color: Colours.white,
    boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(Colours.grayColor[0]) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(Colours.grayColor[0]) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(Colours.grayColor[0]) +
        ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
        "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: Colours.primary,
      backgroundColor: Colours.grayColor[0],
      boxShadow:
          "0 14px 26px -12px rgba(" +
          hexToRgb(Colours.grayColor[0]) +
          ", 0.42), 0 4px 23px 0px rgba(" +
          hexToRgb(Colours.black) +
          ", 0.12), 0 8px 10px -5px rgba(" +
          hexToRgb(Colours.grayColor[0]) +
          ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: Colours.white,
      color: Colours.primary,
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: Colours.white,
      background: "transparent",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
  },
});

const HeaderButton = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes["white"]]: true,
    [classes.simple]: "true",
    [classes.justIcon]: true,
  });

  return (
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
  );
});

HeaderButton.propTypes = {
  children: PropTypes.node,
};

export default HeaderButton;
