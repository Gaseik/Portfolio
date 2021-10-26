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
import Loading from "../Component/loading";
import Group173 from "../img/asset/Group 173.png";
import Asset11 from "../img/asset/Asset 11.png";

let leftValue = 0;
let topValue = 0;

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    margin: "auto",
    perspective: "3000px",
    position: "relative",
    maxWidth: "800px",
  },
  "@keyframes cube-rotate": {
    "0%": {
      transform: "rotateY(0)",
    },

    "100%": {
      transform: "rotateY(360deg)",
    },
  },
  Saas: {
    width: "100%",
    height: 130,
    margin: (props) => (props.flip ? "80px 0" : "0"),
    position: "relative",
    top: "0",
    zIndex: (props) => (props.zIndex ? 4 - props.zIndex : 4),
    // background: color.pink,
    transition: "all .5s ease-in-out",
    "&:hover": {
      // top:-10
    },
  },
  Maas: {
    width: "100%",
    height: 130,
    margin: (props) => (props.flip ? "80px 0" : "0"),
    position: "relative",
    top: "0",
    zIndex: (props) => (props.zIndex ? 4 - props.zIndex : 4),
    // background: color.pink,
    transition: "all .5s ease-in-out",
    "&:hover": {
      // top:-10
    },
  },
  Naas: {
    width: "100%",
    height: 130,
    margin: (props) => (props.flip ? "100px 0" : "0"),
    position: "relative",
    top: "0",
    zIndex: (props) => (props.zIndex ? 4 - props.zIndex : 4),
    // background: color.pink,
    transition: "all .5s ease-in-out",
    "&:hover": {
      // top:-10
    },
  },
  good: {
    //   display: "block",
    width: "280px",
    height: "680px",
    margin: " auto",
    left: 280,
    position: "absolute",
    top: (props) => (props.up ? 250 : -220),
    // display: "flex",
    zIndex: (props) => (props.up ? 2 : 2),
    "transform-style": "preserve-3d",
    transition: "all .5s ease-in-out",
    transform:
      "rotate(73deg) rotateX(50deg)  rotateY(-52deg) skew(-8deg,0deg) scale(1)",
    "& img": {
      width: "100%",
    },
  },
  left: {
    position: "absolute",
    transform:
      "rotateY(0deg) rotateX(-90deg) translateZ(677px) translateY(4px)",
    display: "blcok",
    backgroundColor: "#DBEDF1",
    width: "280px",
    height: "10px",
  },
  leftText: {
    position: "absolute",
    transform:
      "rotateY(0deg) rotateX(-90deg) translateZ(676px) translateY(13px)",
    display: "blcok",
    color: color.primary,
    textAlign: "initial",
    // backgroundColor: "#DBEDF1",
    width: "280px",
    height: "10px",
  },
  down: {
    position: "absolute",
    transform: "rotateY(90deg) rotateX(0deg) translateZ(280px) translateY(8px)",
    display: "blcok",
    backgroundColor: "#DBEDF1",
    width: "10px",
    height: "680px",
  },
  top: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  good1: {
    //   display: "block",
    width: "280px",
    height: "680px",
    margin: " auto",
    left: 300,
    position: "absolute",
    top: (props) => (props.up ? -10 : -50),
    // display: "flex",
    zIndex: 2,
    "transform-style": "preserve-3d",
    transition: "all .5s ease-in-out",
    transform:
      "rotate(73deg) rotateX(50deg)  rotateY(-52deg) skew(-8deg,0deg) scale(1)",
    "& img": {
      width: "100%",
    },
  },
  f3: {
    backgroundColor: "#DDDDDD",
    width: "100%",
    height: "50%",
    position: "absolute",
  },
  dd: {
    width: "100%",
    position: "absolute",
    height: "50%",
    top: "50%",
    backgroundColor: "#f3f3f3",
  },
  inText: {
    "transform-style": "preserve-3d",
    // position: "absolute",
    right: 0,
    top: "50%",
    // transform:
    // "rotateZ(-90deg) rotateY(-0deg)",
  },
  man: {
    margin: "30px 150px 0 90px",
    width: "60px",
    height: "340px",
    boxShadow: "revert",
    //    transform: 'rotate(20deg) skew(-40deg) scale(.4)',
    backgroundColor: color.pink,
  },
  asset11: {
    position: "absolute",
    top: (props) => (props.top ? props.top + 80 : 80),
    left: (props) => (props.left ? props.left + 150 : 150),
    zIndex: 3,
    // width: 80,
    "&:hover": {
      transition: "all .3s ease-in-out",
      // backgroundColor: "#f3f3f3",
      top: (props) => (props.top ? props.top + 70 : 70),
      // transform: "translateZ(-20px) rotate(-30deg)  translateX(-0px)",
    },
  },
}));

function About({ history }) {
  const [flip, set] = useState(0);
  const [flip1, set1] = useState(false);
  const classes = useStyles({ flip: flip === 1 });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFlip = (v) => {
    if (flip === v) {
      set(0);
    } else {
      set(v);
    }
  };
  return (
    <div className={classes.container}>
      <div
        className={classes.Saas}
        onClick={() => {
          handleFlip(1);
        }}
      >
        <Man />
        <Man top={10} left={70} />
        <Man top={20} left={140} />
        <Man top={30} left={210} />
        {/* <div className={classes.inText}>People</div> */}
        <div className={classes.good}>
          <div className={classes.top}>
            <div className={classes.f3}></div>
            <div className={classes.dd}></div>
          </div>
          <div className={classes.leftText}>Symbiosis</div>
          <div className={classes.left}></div>
          <div className={classes.down}></div>
        </div>
      </div>
      <Maas handleFlip={handleFlip} flip={flip} set={set} />
      <Raas handleFlip={handleFlip} flip={flip} set={set} />
      <Naas handleFlip={handleFlip} flip={flip} set={set} />
    </div>
  );
}
export const MaasStyles = makeStyles((theme) => ({
  top: {
    backgroundColor: "#ADDFE3",
    width: "100%",
    height: "33%",
    position: "absolute",
  },
  mid: {
    backgroundColor: "#BFE3E7",
    top: "33%",
    width: "100%",
    height: "33%",
    position: "absolute",
  },
  bt: {
    backgroundColor: "#DBEDF3",
    top: "66%",
    width: "100%",
    height: "34%",
    position: "absolute",
  },
  t: {
    backgroundColor: "#D5D5D5",
    width: "100%",
    height: "33%",
    position: "absolute",
  },
  m: {
    backgroundColor: "#E9E9E9",
    top: "33%",
    width: "100%",
    height: "33%",
    position: "absolute",
  },
  b: {
    backgroundColor: "#F3F3F3",
    top: "66%",
    width: "100%",
    height: "34%",
    position: "absolute",
  },
  line1: {
    display: "block",
    position: "absolute",
    zIndex: 5,
    width: "2px",
    height: (props) =>
      props.flip > 1 ? (props.flip === 3 ? "400px" : "350px") : "250px",
    right: 100,
    transition: "all .1s ease-in-out",
    top: 130,
    backgroundColor: "rgba(0,0,0,.5)",
  },
}));

function Maas({ set, flip, handleFlip }) {
  const cla = MaasStyles({ flip: flip });
  const classes = useStyles({ zIndex: 1, flip: flip === 2 });
  return (
    <div className={classes.Maas} onClick={() => handleFlip(2)}>
      <div className={cla.line1}></div>
      <Man top={0} left={110} />
      <div className={classes.good}>
        <div className={classes.top}>
          <div className={cla.top}></div>
          <div className={cla.mid}></div>
          <div className={cla.bt}></div>
        </div>
        <div className={classes.leftText}>Metaverse</div>
        <div className={classes.left}></div>
        <div className={classes.down}></div>
      </div>
    </div>
  );
}

function Raas({ set, flip, handleFlip }) {
  const cla = MaasStyles();
  const classes = useStyles({ zIndex: 2, flip: flip === 3 });
  return (
    <div className={classes.Maas} onClick={() => handleFlip(3)}>
      <div className={classes.good}>
        
        <div className={classes.top}>
          <div className={cla.t}></div>
          <div className={cla.m}></div>
          <div className={cla.b}></div>
        </div>
        <div className={classes.leftText}>Mediation and Enablement</div>
        <div className={classes.left}></div>
        <div className={classes.down}></div>
      </div>
    </div>
  );
}

export const NaasStyles = makeStyles((theme) => ({
  1: {
    backgroundColor: "#ADDFE3",
    width: "100%",
    height: "20%",
    position: "absolute",
  },
  2: {
    backgroundColor: "#BFE3E7",
    top: "20%",
    width: "100%",
    height: "20%",
    position: "absolute",
  },
  3: {
    backgroundColor: "#DBEDF3",
    top: "66%",
    width: "100%",
    height: "34%",
    position: "absolute",
  },
}));

function Naas({ set, flip, handleFlip }) {
  const cla = MaasStyles();
  const classes = useStyles({ zIndex: 3, flip: flip === 4 });
  return (
    <div className={classes.Maas} onClick={() => handleFlip(4)}>
      <div className={classes.good}>
        <div className={classes.top}>
          <div>
            <img src={Group173} alt="Naas" />
          </div>
        </div>
        <div className={classes.leftText}>Network and Connectivity</div>
        <div className={classes.left}></div>
        <div className={classes.down}></div>
      </div>
    </div>
  );
}
function Man({ top, left }) {
  const classes = useStyles({ top: top, left: left });
  return <img src={Asset11} alt="" className={classes.asset11} />;
}

export default withRouter(About);
