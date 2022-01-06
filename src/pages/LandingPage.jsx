import * as React from "react";
import { makeStyles } from "@mui/styles";
import {useState,useEffect}  from 'react'
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Loading from '../Component/loading'
import Home from './home'
import Projects from './ProjectsPreview'


export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  right: {
    height: "100%",
    width: "30%",
    backgroundColor: color.primary,
    position: "absolute",
    right: 0,
    animationName: "$background1",
    animationDuration: "1.5s",
  },
  "@keyframes background1": {
    from: {
      width: "100%",
    },
    to: {
      width: "30%",
    },
  },
}));

function LandingPage({ history }) {
  const [isloading,setIsloading] = useState(true)
  const classes = useStyles();



  return (
    <div className={classes.container}>
        <div className={classes.right}></div>
      <Loading isloading={isloading}/>
      <Home setIsloading={setIsloading}/>
      <Projects setIsloading={setIsloading}/>
      
    </div>
  );
}

export default withRouter(LandingPage);
