import * as React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import { AiOutlineArrowUp } from "react-icons/ai";
export const useStyles = makeStyles((theme) => ({
  backtoTop: {
    width: "40px",
    height: "40px",
    color: color.primary,
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    position: "fixed",
    right: 50,
    bottom: 50,
    // bottom: (props) => (props.isVisible ? 50: -40),
    fontSize: 50,
    opacity: (props) => (props.isVisible ? 1 : 0),
    cursor: "pointer",
    // "transition-property": "transform",
    "transition-property": "opacity",
    "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transition-duration": "150ms",
    "&:hover": {
        color:'#0090fd96',
        transition:'all .3s ease-in-out',
    }
  },
  up: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 20px 20px 20px",
    borderColor: "transparent transparent #dfdfdf transparent",
  },
}));

function ToTop({}) {
  const [isVisible, setIsVisible] = useState(false);
  const classes = useStyles({ isVisible: isVisible });

  function toggleVisiblilty() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function backtoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblilty);
    return () => {
      window.addEventListener("scroll", toggleVisiblilty);
    };
  }, []);
  return (
    <div className={classes.backtoTop} onClick={backtoTop}>
      <AiOutlineArrowUp />
      {/* <div className={classes.up}></div> */}
    </div>
  );
}

export default withRouter(ToTop);
