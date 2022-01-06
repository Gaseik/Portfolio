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
    height: "100vh",
    // display: "flex",
    position: "relative",
    // alignItems: "center",
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
}));

function Projects({ history, setIsloading }) {
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
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Grid container>
          <div className={classes.title}>
            <div className={classes.titleName}>Projects</div>
            <div className={classes.bar}></div>
          </div>
          <Project />
          <Project />
          <Project />
          <Project />
        </Grid>
      </Grid>
    </Grid>
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
    "&:hover":{
      "& $blur":{
        background: 'rgba(0,0,0,.7)',
        position: 'absolute',
        index:2,
        opacity: 1,
        width:'90%',
        height: '90%',
        display: "block",
        transition: "all 0.3s ease-in-out",
      },
    }
  },
  blur: {
    background: 'rgba(0,0,0,.7)',
    position: 'absolute',
    index:2,
    opacity:0,
    width: '100%',
    height: '100%',
    display: "block",
    transition: "all 0.3s ease-in-out",
  },
  img:{
    width: (props) => (props.in ? "110%" : '100%'),
    transition: "all 0.2s ease-in-out",
  }
}));

function Project({}) {
  const [inornot, setInornot] = useState(false);
  const classes = PStyles({ in: inornot });
  // useEffect(() => {console.log(inornot)},[inornot])
  return (
    <Grid
      item
      xs={6}
      className={classes.project}
      onMouseEnter={() => setInornot(true)}
      onMouseLeave={() => setInornot(false)}
    >
      {/* <div className={classes.project}></div> */}
      <img src={Image1} alt="23" className={classes.img}/>
      <div className={classes.blur}>
        <div className={classes.title}></div>
        <div></div>
      </div>
    </Grid>
  );
}
