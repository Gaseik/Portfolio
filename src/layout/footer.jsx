import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useScrollPosition } from "./useScrollPosition"
import {breakpoints} from '../styles/js/style'
let height = "50px";


export const useStyles = makeStyles({
  container: {
    bottom:0,
    left: 0,
    color:'#C4C4C4',
    height: height,
    zIndex: "10",
    fontSize:10,
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: 'linear-gradient(220.1deg, rgba(0, 0, 0, 0.04) 3.99%, rgba(255, 255, 255, 0.056) 115.92%)',
    backdropFilter: 'blur(40px)',
    [breakpoints.xs]:{
      display: 'none',
    }
  },
});

function Footer() {
  const [sticky, setSticky] = useState(true)
  const classes = useStyles({sticky:sticky});
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )
  return (
    <div className={classes.container}>
      <div className={classes.title}>
      © 2022 Gaseik. James Cheng , All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
