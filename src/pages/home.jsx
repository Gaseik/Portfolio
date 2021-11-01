import * as React from "react";
import { makeStyles } from "@mui/styles";
import {useState,useEffect}  from 'react'
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Image1 from "../img/aa12.png";
import { SiC } from "react-icons/si";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import Loading from '../Component/loading'



export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    alignItems: "center",
  },
  left: {},
  right: {
    height: "100%",
    width: "30%",
    backgroundColor: color.primary,
    position: "absolute",
    right: 0,
    animationName: "$background1",
    animationDuration: "1.5s",
  },
  image: {
    width: "40%",
    minWidth: "500px",
    right: "18%",
    position: "absolute",
    animationName: "$image1",
    animationDuration: "3s",
  },
  "@keyframes image1": {
    "0%": {
      opacity: "0%",
    },
    "50%": {
      opacity: "0%",
    },
    "100%": {
      opacity: "100%",
    },
  },

  "@keyframes background1": {
    from: {
      width: "100%",
    },
    to: {
      width: "30%",
    },
  },
  developer: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 84,
    height: "112px",
    color: "#fff",
    overflow: "hidden",
    right: "25%",
    animationName: "$text1",
    animationDuration: "3s",
  },

  designer: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 84,
    height: "112px",
    color: "#000",
    right: "35%",
    top: "20%",
    "& a": {
      color: "#fff",
    },
  },
  "@keyframes text1": {
    from: {
      height: "0px",
    },
    to: {
      height: "112px",
    },
  },
  icons: {
    width: "200px",
    // backgroundColor: "#d5d5d5",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 18,
    position: "absolute",
    left: "5%",
    bottom: "20%",
    
    animationName: "$image1",
    animationDuration: "3s",
  },
  icon: {
    cursor: "pointer",
    fontFamily: "sans-serif",
    // fontSize:18,
    "&:hover": {
      color: color.primary,
      transition: "all .2s ease-in-out",
    },
    // fontWeight:'bold',
  },
}));

function Home({ history }) {
  const [isloading,setIsloading] = useState(true)
  const classes = useStyles();


  React.useEffect(() => {
    fetch(Image1)
      .then(resp => resp.blob())
      .then(blob => {
        let url = URL.createObjectURL(blob);
        let img = new Image();
        // Image loading is an asynchronous operation
        img.onload = e => {
          setIsloading(false)
        }
        img.src = url;
      });
  })

  return (
    <div className={classes.container}>
      <Loading isloading={isloading}/>
      <div className={classes.left}></div>
      <div className={classes.icons}>
        <div
          onClick={() => {
            window.open("https://www.linkedin.com/in/weichieh-cheng-FE");
          }}
          className={classes.icon}
        >
          {" "}
          <FaLinkedinIn />
        </div>
        <div 
          onClick={() => {
            window.open("https://github.com/Gaseik");
          }}
        className={classes.icon}>
          {" "}
          <FaGithubAlt />
        </div>
        <div
          onClick={() => {
            window.open("https://www.cakeresume.com/james-cheng-gaseik");
          }}
        className={classes.icon}>
          <SiC fontSize={16} />
        </div>
      </div>
      <div className={classes.right}></div>
      <img src={Image1} alt="" className={classes.image} />
    </div>
  );
}

export default withRouter(Home);
