import * as React from "react";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Image from "../img/home.png";
import Video from "../img/1006_1.mp4";
import { BsArrowRight } from "react-icons/bs";

export const useStyles = makeStyles((theme) => ({
  screen: {
    minHeight: "100%",
  },
  container: {
    padding: "0 10vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    width: "100%",
    position: "fixed",
    top: 0,
    // backgroundColor:'rgba(0,0,0,0.2)'
    // bottom: "0px"
  },
  video: {
    minHeight: "100%",
    minWidth: "100%",
    position: "fixed",
    float: "left",
    top: -100,
    left: 0,
  },
  area: {
    width: "35%",
    minWidth: "650px",
  },
  title: {
    fontSize: "92px",
    marginBottom: "20px",
    wordWrap: "break-word",
    textAlign: "initial",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    textAlign: "initial",
    // fontWeight:'light'
  },
  gogo: {
    ...style.btn,
    fontSize: 18,
    backgroundColor: color.primary,
    alignItems: "center",
    height: 50,
    margin: "4rem 0 0 0 ",
    width: "120px",
    justifyContent: "space-around",
  },
}));

function Home({ history }) {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      <video className={classes.video} autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={classes.container}>
        <div className={classes.area}>
          <div className={classes.title}>Embrace the Digital Era.</div>
          <div className={classes.subtitle}>
            Digital Transformation is not about a change, but rather a continuous evolution. Learn how Hannlync can help you succeed in the digital era.{" "}
          </div>
          <div
            className={classes.gogo}
            onClick={() => {
              history.push("/services");
            }}
            transition='glide-right'
            to="/services"
          >
            Get Started <BsArrowRight style={{ marginLeft: 5 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
