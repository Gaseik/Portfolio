import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Image2 from "../img/AboutImg.jpg";
import { HiDownload } from "react-icons/hi";
export const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    height: "100%",
    // display: "flex",
    position: "relative",
    // marginTop: "50px",
    // margin: " 0",
    padding: "10vw 5%",
  },
  title: {
    margin: "0 0 7%",
    width: "100%",
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
  main: {
    textAlign: "initial",
    marginBottom: "2rem",
    fontSize: "28px",
    fontWeight: "bold",
  },
  content: {
    textAlign: "initial",
    fontSize: "16px",
    marginBottom: "5rem",
  },
  download: {
    ...style.btn,
    width: "25%",
    borderRadius: "30px",
    justifySelf: "inherit",
    margin: "2rem 0",
    alignItems: "center",
    justifyContent: "center",
  },

  //right
  right: {
    position: "relative",
  },
  img: {
    width: "50%",
    position: "relative",
    zIndex: 2,
    "&::before": {
      content: "''",
      width: "100px",
      height: "100px",
      border: "10px solid " + color.primaryDark,
      position: "absolute",
      left: "50px",
    },
  },
  border: {
    content: "''",
    width: "50%",
    height: "100%",
    border: "5px solid " + color.primaryDark,
    position: "absolute",
    left: "10%",
    top: "10%",
    zIndex: 1,
  },
}));

function About({ aboutRef, setScroll }) {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      onMouseEnter={() => {
        setScroll("about");
      }}
      ref={aboutRef}
    >
      <div className={classes.title}>
        <div className={classes.titleName} id={"about"}>
          About
        </div>
        <div className={classes.bar}></div>
      </div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid item xs={8}>
            <div className={classes.main}>
              I am a problem solver, an art enthusiast, and a holistic developer
              who is performing at the junction of design and crafting
              meaningful ideas.
            </div>
            {/* <div className={classes.content}>
              With a psychology background, I understand how to put the
              user at the center of design. I do this by empathizing with the
              users and discovering their motivations, needs, and pain points. 
            </div> */}
            <div className={classes.content}>
              <p>
                {" "}
                As a front-end developer, we always deal with those look like
                conflict ideas like logical processes and aesthetics.
              </p>
              <p>
                {" "}
                In my personality, which is also kind of that way, enjoying to
                balance those things in the right way to create a product the
                user need or we think they need.
              </p>
              <p>
                My psychology background also improves those key points and help
                my communication skill and UX design which also I have a serious
                passion for. 
              </p>
              <p>
              Interested in working on ambitious projects with
                positive people. 
              </p>
              <p>Let’s make something special!</p>
            </div>

            <div className={classes.download} onClick={()=>{window.open('https://www.cakeresume.com/james-cheng-gaseik')}}>
              My Resume
              <HiDownload fontSize={16} style={{ marginLeft: ".5rem" }} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} data-aos="zoom-in-left" 
      data-aos-duration="1000">
          <Grid
            container
            // direction={"row-reverse"}
          >
            <Grid item xs={10} className={classes.right}>
              <img src={Image2} alt="Gaseik" className={classes.img} />
              <div className={classes.border} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <div></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(About);
