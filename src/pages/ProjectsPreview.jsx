import * as React from "react";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Image1 from "../img/JanitorMockup.png";
import { SiC } from "react-icons/si";
import Loading from "../Component/loading";
import Grid from "@mui/material/Grid";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    // display: "flex",
    position: "relative",
    margin: "4rem 0",
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
    margin: "50px auto ",
    fontSize: "24px",
    borderRadius: "50px",
    padding: "5px 2rem",
    color: color.primaryDark,
    border: "3px solid " + color.primaryDark,
    // background: color.primary,
    "&:hover": {
      color: color.primary,
      border: "3px solid " + color.primary,
      transition: "all .2s ease-in-out",
    },
  },
}));

const PPs = [
  {
    title: "Mercury",
    id: "a1",
    image: Image1,
    description: "Anti-counterfeiting System",
  },
  {
    id: "a2",
    title: "Hannlync",
    image: Image1,
    description: "Offical website",
  },
  {
    id: "a3",
    title: "Janitor (Mobile)",
    image: Image1,
    description: "Assistant application",
  },
  {
    id: "a4",
    title: "CitizenApp (Mobile)",
    image: Image1,
    description: "Assistant application",
  },
];

function Projects({ history, setIsloading, projectsRef }) {
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
    <div className={classes.container} ref={projectsRef}>
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
                  <Project project={P} key={P.id} />
                ))}
              </Grid>
            </Grid>
            <div className={classes.more}>More</div>
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
  },
  description: {
    color: "#f4f4f4",
  },
}));

function Project({ project }) {
  const classes = PStyles();

  return (
    <Grid item xs={12} sm={6} className={classes.project}>
      {/* <div className={classes.project}></div> */}
      <img src={project.image} alt={project.title} className={classes.img} />
      <div className={classes.blur}>
        <div className={classes.title}>
          {project.title}
          <div className={classes.bar}></div>
        </div>

        <div className={classes.description}>{project.description}</div>
      </div>
    </Grid>
  );
}
