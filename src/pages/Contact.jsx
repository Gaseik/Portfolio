import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Image2 from "../img/6dc7cbdfeb72054c317824f67ca6368a.jpeg";
import { HiDownload } from "react-icons/hi";
export const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    height: "100%",
    // display: "flex",
    position: "relative",
    marginTop: "50px",
    // margin: " 0",
    padding: "5% 5%",
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
  input: {
    background: "none",
    width: "100%",
    border: "none",
  },
  out: {
    border:'1px solid '+color.primaryDark,
    
  },
}));

function Contact({ contactRef }) {
  const classes = useStyles();

  return (
    <div className={classes.container} ref={contactRef}>
      <div className={classes.title}>
        <div className={classes.titleName} id={"about"}>
          Contact
        </div>
        <div className={classes.bar}></div>
      </div>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={8}>
          <form className={classes.form}>
            <div className={classes.out}>
              <input type="text" className={classes.input} plac />
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Contact);
