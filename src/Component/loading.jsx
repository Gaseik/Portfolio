import * as React from "react";
import { makeStyles, styled } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import color, { style } from "../styles/js/style";

export const useStyles = makeStyles((theme) => ({
  loading: {
    zIndex: (props) => (props.isloading ? 10 : -1),
    width: "100%",
    height: "100vh",
    // height: props=>props.isloading?'100vh':'0',
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: color.primaryDark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // filter:props=>props.isloading? 'blur(3.5rem)':'blur(0)',
    opacity: (props) => (props.isloading ? 1 : 0),
    transition: "all 1s ease-in-out",
  },
}));

function Login({ isloading }) {
  const classes = useStyles({ isloading: isloading });
  // console.log(isloading)

  return (
    <div className={classes.loading}>
      <CircularProgress color="inherit" style={{color:'#fff'}} />
    </div>
  );
}

export default Login;
