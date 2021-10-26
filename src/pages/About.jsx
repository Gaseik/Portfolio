import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Video1 from "../img/About.mp4";
import { FiArrowUpRight } from "react-icons/fi";
import MapImage from "../img/About/Products_Website 1.png";
import { useSpring, animated, config } from "@react-spring/web";
import Image1 from "../img/About/Rectangle 76.png";
import Image2 from "../img/About/Rectangle 77.png";
import Image3 from "../img/About/Rectangle 78.png";
import Loading from '../Component/loading';
export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
  },
  video: {
    objectFit: "cover",
    // maxHeight:'400px',
    minHeight: "400px",
    minWidth: "100px",
    maxWidth: "100%",
    position: "absolute",
    // float: "left",
    top: "-50px",
    left: 0,
    // position: "absolute",
    zIndex: -1,
  },
  top: {
    background: "#000",
    top: "-200px",
    height: "600px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  topTitle: {
    position: "absolute",
    zIndex: 2,
    fontSize: 60,
    // top: 250,
    bottom: 150,
    left: 200,
  },
  topSub: {
    position: "absolute",
    zIndex: 2,
    fontSize: 18,
    bottom: 100,
    left: 200,
  },
  secArea: {
    fontSize: 18,
    color: "#000",
    display: "flex",
    flexWrap: "wrap",
    padding: "0 200px",
    justifyContent: "space-between",
    //   backgroundColor:"#DFDFDF"
  },
  thirdArea: {
    fontSize: 18,
    color: "#000",
    display: "flex",
    flexWrap: "wrap",
    // height: 600,
    padding: "2rem 100px 0 100px",
    justifyContent: "space-between",
    //   backgroundColor:"#DFDFDF"
  },
  secText: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  secTitle: {
    fontWeight: "bold",
    fontSize: 48,
    marginBottom: "2rem",
    width: "100%",
    textAlign: "initial",
  },
  secContent: {
    fontSize: 18,
    marginBottom: "2rem",
    lineHeight: "40px",
    width: "100%",
    textAlign: "initial",
  },
  secNumber: {
    width: "40%",
    // backgroundColor: "#efefef",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  "@property --num": {
    syntax: "<integer>",
    "initial-value": 0,
    inherits: false,
  },
  plus: {
    fontSize: 120,
  },
  Number1: {
    marginBottom: "300px",
  },
  Number2: {
    marginTop: "300px",
  },
  number: {
    fontSize: 180,
    color: color.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::after": {
      content: "+",
      display: "block",
    },
  },
  "@keyframes counter": {
    from: {
      "--num": 0,
    },
    to: {
      "--num": 100,
    },
  },
  nTitle: {
    fontSize: 24,
  },
  map: {
    width: "50%",
  },
  mapContent: {
    width: "40%",
    textAlign: "initial",
    "& h4": {
      fontSize: 48,
      margin: "2rem 0",
      fontWeight: "bold",
    },
    "& p": {
      lineHeight: "40px",
    },
  },
  link: {
    margin: "3rem 0",
    color: color.primary,
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },

  fourArea: {
    margin: "200px 0",
    "& h4": {
      fontSize: 48,
      margin: "2rem 0 4rem",
      fontWeight: "bold",
    },
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
  },
  card: {
    borderRadius: 12,
    width: "30%",
    // '&:hover':{
    //   transition: 'all .3s ease-in-out',
    //   '--tw-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    //   'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
    // }
  },
  cardImage: {
    // backgroundColor: color.grey,
    overflow: "hidden",
    width: "100%",
    height: 400,
  },
  cardContent: {
    textAlign: "initial",
    "& h4": {
      fontSize: 32,
      margin: "2rem 0 1rem",
      color: color.primary,
      fontWeight: "bold",
    },
    "& p": {
      fontSize: 18,
      fontWeight: "lighter",
    },
  },
  fiveArea: {
    width: "calc(100% - 200px)",
    height: 600,
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    textAlign: "initial",
    padding: "0 0 0 200px",
    // alignItems: 'center'
    justifyContent: "center",
    "& h4": {
      fontSize: 52,
      margin: "0rem 0",
    },
    "& p": {
      fontSize: 24,
    },
  },
  fiveBtn: {
    ...style.btn,
    fontSize: 18,
    backgroundColor: color.primary,
    alignItems: "center",
    height: 50,
    margin: "4rem 0 0 0 ",
    width: "120px",
    justifyContent: "space-around",
  },
  backtoTop: {
    width: "50px",
    height: "50px",
    backgroundColor: color.greyDark,
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    position: "fixed",
    right: 100,
    bottom: 100,
    cursor: "pointer",
  },
  up: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 20px 20px 20px",
    borderColor: "transparent transparent #dfdfdf transparent",
  },
}));

const four = [
  {
    title: "Mediation Bifrost (Edge)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at malesuada sit suspendisse vel viverra egestas.",
    image: Image1,
  },
  {
    title: "Reality Portal (RaaS)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at malesuada sit suspendisse vel viverra egestas.",
    image: Image2,
  },
  {
    title: "Digital Society Platform",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at malesuada sit suspendisse vel viverra egestas.",
    image: Image3,
  },
];

function About({ history }) {
  const classes = useStyles();
  const [flip, set] = useState(false);
  const [flip1, set1] = useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const { number } = useSpring({
    // reset: true,
    // reverse: flip,
    from: { number: 0 },
    number: 7,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });


  return (
    <div>
      <Loading isloading={isLoading}/>
      <div className={classes.container}>
        <div className={classes.top}>
          <video className={classes.video} autoPlay loop muted>
            <source src={Video1} type="video/mp4" />
          </video>
          <div className={classes.topTitle}>About Us</div>
          <div className={classes.topSub}>
            We are a Digital Managed Service Provider with 15+ years experience
            supporting enterprises in their Digital Transformation.
          </div>
        </div>
        <div className={classes.secArea}>
          <div className={classes.secText}>
            <div className={classes.secTitle}>Vision & Mission</div>
            <div className={classes.secContent}>
              Our vision is to build a new, better Planet and support an
              advanced civilization where technology is accessible to
              everyone.<br/>Our Mission is to support Businesses and Governments in
              embracing new technologies to complete Digital Transformation and
              facilitate economic growth and improvements by leveraging Digital
              Reality to interact and improve other areas of life such as:
              Physical, Biological, Sociological, and Psychological.
            </div>
          </div>
          <div className={classes.secNumber}>
            <div className={classes.Number1}>
              <div className={classes.number}>
                15<div className={classes.plus}>+</div>
              </div>
              {/* <animated.div className={classes.number}>{number.to(n => n.toFixed(0))}</animated.div> */}
              <div className={classes.nTitle}>years of experience</div>
            </div>
            <div className={classes.Number2}>
              {/* <div></div> */}
              <animated.div className={classes.number}>
                {number.to((n) => n.toFixed(0))}
              </animated.div>
              <div className={classes.nTitle}>worldwide locations</div>
            </div>
          </div>
        </div>
        {/* <div className={classes.thirdArea}>
          <div className={classes.map}>
            <img
              alt="map"
              src={MapImage}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={classes.mapContent}>
            <h4>Why Hannlync?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at
              malesuada sit suspendisse vel viverra egestas. Ullamcorper urna at
              imperdiet velit libero. Tellus, non amet sed lacinia molestie
              sodales. Suspendisse dolor cras neque sit vel. Iaculis condimentum
              morbi at non aliquet.
            </p>
            <div
              className={classes.link}
              onClick={() => {
                history.push("/contact");
              }}
            >
              Visit our offices worldwide >{" "}
            </div>
          </div>
        </div> */}
        <div className={classes.fourArea}>
          <h4>Key Technologies</h4>
          <div className={classes.cards}>
            {four.map((d) => (
              <div className={classes.card}>
                <div className={classes.cardImage}>
                  <img src={d.image} alt={d.title} style={{ width: "100%" }} />
                </div>
                <div className={classes.cardContent}>
                  <h4>{d.title}</h4>
                  {/* <p>{d.content}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.fiveArea}>
          <h4>Ready to jumpstart your digital journey?</h4>
          <p>
            Contact us to learn more about our product and
            solutions.
          </p>
          <div
            className={classes.fiveBtn}
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact Us <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(About);
