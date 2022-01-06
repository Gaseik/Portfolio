import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";

export const useStyles = makeStyles((theme) => ({
   container: {
     width: "100%",
     height: "100vh",
     // display: "flex",
     position: "relative",
     margin:'0rem 0',
     padding:'0 5%'
   },
 }));


 function About ({}){
    const classes = useStyles()

    return(
     <div className={classes.container}>

     </div>
    )
}

export default withRouter(About)