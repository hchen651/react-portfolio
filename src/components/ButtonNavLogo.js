// Custom Component - Button - Text, Color-change, Logo

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles((theme) => ({
    root: {
        color: 'tan',
        fontSize: "22px",
        padding: "0 14px",
        '&:hover': {
            color: 'tan',
            backgroundColor: "transparent",
        },
    },
}))(Button);

export default function ButtonNavLogo(props) {
    const { href, component } = props;

    return(
        <StyledButton component={component} href={href}>
            {props.children}
        </StyledButton>
    )
}