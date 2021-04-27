import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import pernimg from "../images/pern-stack.jpg";
import mernimg from "../images/mern-stack.jpg";
import htmlcssjsimg from "../images/html-css-javascript-lg.jpg";
import reactimg from "../images/react-redux.jpg";
import jsfullstackimg from "../images/javascript-fullstack.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Groundcycle v2",
    description: `(Current Work in Progress) A complete redesign and overhaul of Groundcycle version 1.
    The site structure is being completely redesigned with the MaterialUI framework and the original mongoDB
    database is being redone in PostgreSQL.
    This is planned to be the main company site. (Private Company Repository)`,
    image: pernimg,
    github: "",
    live: "https://groundcycle.herokuapp.com/",
  },
  {
    name: "Groundcycle v1",
    description: `A website built for a composting service startup with hundreds of customers. The website
    was built from the ground up with MongoDB, Express, React, Node, and Bootstrap.
    (Private Company Repository)`,
    image: mernimg,
    github: "",
    live: "https://groundcycle-v1.herokuapp.com/",
  },
  {
    name: "Questgiver",
    description: `An app in which you can search for your favorite video games and get suggestions for
    related games based on similarities such as genre and gameplay mechanics. This is a pure HTML/CSS/Javascript app.
    The app uses the IGDB and GiantBomb APIs to fetch game data.`,
    image: htmlcssjsimg,
    github: "https://github.com/hchen651/questgiver",
    live: "https://hchen651.github.io/questgiver/",
  },
  {
    name: "Imprint",
    description: `An app which can basically be described as a digital rolodex. Built on the MERN stack, the objective
    for this app is to allow users to sign up, scan a business card, then have the details of the card automatically saved
    to their collection of cards. The app uses the Google Vision OCR API to detect text on a card. The OCR feature is currently
    disabled due to deprecated packages that need to be updated.`,
    image: mernimg,
    github: "https://github.com/hchen651/app-project-3",
    live: "https://project-imprint.herokuapp.com/",
  },
  {
    name: "Tosser",
    description: `An app built to help people identify recyclables and prevent cross-contamination. Features include a 
    camera feature which uses a machine learning API to detect objects. We then identify and classify the object to inform
    the user whether or not it is recyclable, as well as where and how it can be recycled. This app was built with HTML, CSS, 
    Javascript, MySQL, and Firebase.`,
    image: jsfullstackimg,
    github: "https://github.com/ericdahan8/Project2",
    live: "http://project-tosser.herokuapp.com/",
  },
  {
    name: "News Scraper",
    description: `A web scraper that scrapes a website for articles and displays it in a simple format without all the ads, images, 
    and extra frills. Built on React.`,
    image: reactimg,
    github: "https://github.com/hchen651/web-scraper",
    live: "",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.github}>
                  View Code
                </Button>
                <Button size="small" color="primary" href={project.live}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
