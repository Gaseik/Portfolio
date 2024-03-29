import * as React from "react";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Image1 from "../img/JanitorMockup.png";
import HannlyncImage from "../img/HanMockup.png";
import JanitorImage from "../img/JanitorNNMockup.png";
import CititzenImage from "../img/CitizenMockup.png";
import Grid from "@mui/material/Grid";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    // display: "flex",
    position: "relative",
    padding: "4rem 0",
  },
  title: {
    margin: "2rem 0",
    width: "100vw",
  },
  titleName: {
    fontSize: "28px",
    position: "relative",
    margin: "0 auto",
  },
  bar: {
    content: "''",
    // position: "absolute",
    display: "block",
    width: "100px",
    margin: "0 auto",
    height: "5px",
    background: color.primary,
  },
  project: {
    backgroundImage: `url(${Image1})`,
    background: color.primary,
    height: "30vw",
    display: "block",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  more: {
    ...style.btn,
    flexDirection: "column",
    overflow: "hidden",
    margin: "50px auto ",
    fontSize: "24px",
    borderRadius: "50px",
    padding: "5px 2rem",
    width: "3rem",
    color: color.primaryDark,
    border: "3px solid " + color.primaryDark,
    position: "relative",
    // background: color.primary,
    "&:hover": {
      color: color.primary,
      border: "3px solid " + color.primary,
      transition: "all .4s ease-in-out",
      "& $cc": {
        top: 55,
        color: color.primary,
        transition: "all .4s ease-in-out",
      },
      "& $down": {
        top: 15,
        color: color.primary,
        transition: "all .4s ease-in-out",
      },
    },
  },
  down: {
    fontSize: "28px",
    position: "absolute",
    top: -25,
  },
  cc: {
    position: "absolute",
    top: 10,
  },
}));

const PPs = [
  {
    title: "Mercury",
    id: "a1",
    image: Image1,
    link: 'https://www.baozhen.hannlync.com/',
    description: "Anti-counterfeiting System",
  },
  {
    id: "a2",
    title: "Hannlync",
    image: HannlyncImage,
    link: "https://www.hannlync.com/",
    description: "Offical website(RWD)",
  },
  {
    id: "a3",
    title: "Janitor (Mobile)",
    link: 'https://www.janitorapp.hannlync.com/login',
    image: JanitorImage,
    description: "Assistant application",
  },
  {
    id: "a4",
    title: "CitizenApp (Mobile)",
    image: CititzenImage,
    link: "https://www.citizenapp.hannlync.com/login",
    description: "Assistant application",
  },
];

function Projects({ history, setScroll, setIsloading, projectsRef }) {
  const classes = useStyles();

  React.useEffect(() => {
    fetch(Image1)
      .then((resp) => resp.blob())
      .then((blob) => {
        let url = URL.createObjectURL(blob);
        let img = new Image();
        // Image loading is an asynchronous operation
        img.onload = (e) => {
          setIsloading(false);
        };
        img.src = url;
      });
  });

  return (
    <div className={classes.container} onWheel={() => setScroll('projects')} ref={projectsRef}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <div className={classes.title}>
              <div className={classes.titleName}>Projects</div>
              <div className={classes.bar}></div>
            </div>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                {PPs.map((P) => (
                  <Project project={P} key={P.id} data-aos="flip-up" />
                ))}
              </Grid>
            </Grid>
            {/* <div className={classes.more}>
              <IoIosArrowDown  className={classes.down}/>
              <div className={classes.cc}>More</div>
            </div> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Projects);

export const PStyles = makeStyles((theme) => ({
  project: {
    height: "30vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    transition: "all .1s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      "& $blur": {
        background: "rgba(0,0,0,.7)",
        position: "absolute",
        index: 2,
        opacity: 1,
        width: "90%",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease-in-out",
      },
      "& $img": {
        width: "115%",
        transition: "all 0.2s ease-in-out",
      },
    },
  },
  blur: {
    background: "rgba(0,0,0,.7)",
    position: "absolute",
    index: 2,
    opacity: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    // fontWeight: "bold",
  },
  bar: {
    width: "100%",
    height: "3px",
    display: "flex",
    background: color.primary,
    margin: "5px 0",
  },
  img: {
    width: (props) => (props.in ? "110%" : "100%"),
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
  },
  description: {
    color: "#f4f4f4",
  },
}));

function Project({ project }) {
  const classes = PStyles();

  function open() {
    window.open(project.link)
  }

  return (
    <Grid item xs={12} sm={6} data-aos="flip-up" data-aos-easing="linear"
      data-aos-duration="400">
      <div className={classes.project} onClick={open}>
        <img src={project.image} alt={project.title} className={classes.img} />
        <div className={classes.blur}>
          <div className={classes.title}>
            {project.title}
            <div className={classes.bar}></div>
          </div>

          <div className={classes.description}>{project.description}</div>
        </div>
      </div>
    </Grid>
  );
}
