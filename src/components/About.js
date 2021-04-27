import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tan",
        textShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
    subtitle: {
        color: "white",
        textShadow: "1px 0px 30px rgba(0, 0, 0, 1)",

    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "80vw",
        textAlign: "center",
        zIndex: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Henry Chen" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <h3>ABOUT ME</h3>
            </Typography>

            <Typography className={classes.subtitle} variant="p">
                <p>I'm Henry, a Full-Stack Web Developer from New York.</p>
                <p>I graduated with honors from St. John's University with a Bachelor's Degree in Computer Science.</p>
                <p>I enjoy finding quick and efficient solutions to difficult problems, and analyzing them improve my solutions, and work well in Agile environments.</p>
                <p>I'm well versed in many coding languages and frameworks such as HTML, CSS, Javascript, React, noSQL, SQL, Java, Python, and many more. </p>
            </Typography>
            <IconButton aria-label="GitHub" href="https://github.com/hchen651">
                <GitHubIcon />
            </IconButton>
            <IconButton aria-label="GitHub" href="https://www.linkedin.com/in/hchen651/">
                <LinkedInIcon />
            </IconButton>


        </Box>
    );
};

export default Header;
