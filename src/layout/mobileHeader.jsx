import * as React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { withRouter } from "react-router";
import { RiSearch2Line } from "react-icons/ri";
import Color from "../styles/js/style";
import useMediaQuery from '@mui/material/useMediaQuery';

import { useScrollPosition } from "./useScrollPosition";
let height = "80px";
let login = {
  margin: "0 15px",
  cursor: "pointer",
  fontSize: "16px",
  height: "40px",
  // fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  // alignItems:'center',
  justifyContent: "center",
  // alignItems: 'center',
  textAlign: "center",
  verticalAlign: "bottom",
  color: (props) => (props.color ? "#000" : "#fff"),
  paddingTop: "0px",
  marginRight: "120px",
  // textTransform: "uppercase",
  "&:hover": {
    color: Color.primaryDark,
    transition: "all .2s ease-out",
  },
};
export const useStyles = makeStyles({
  header: {},

  container: {
    top: 0,
    left: 0,
  
    transition: "transform 300ms ease-in-out",
    position: "fixed",
    height:height,
    width: "100vw",
    zIndex: "10",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: (props) => (!props.navbar ? "" : Color.primaryDark),
  },

  Logo: {
    cursor: "pointer",
    padding: "0 0 0 0rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    fontSize: 48,
    width: 180,
    color: (props) => (props.navbar ? Color.primary : Color.primaryDark),
    // fontWeight: "bold",
    margin: "0 2% 0 5%",
    transition: 'all 0.2s ease-in-out',
  },
  block:{
    display: "block",
    width:'50px'
  },
  menu:{
    position: 'relative',
    display: 'inline - block',
    height: '50px',
    width: '50px',
    cursor: 'pointer',
    transform: 'rotate(0deg)',
    transition: 'all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99)',
    'userSelect': 'none',
    '- webkit - tap - highlight - color': 'transparent'
  },
  burger:{
    width:'100%',
    height:'100%',
    display: "block",
    position: "relative",
    transitionDelay:'0s',
    transition: 'all 0.2s cubic-bezier(0.4, 0.01, 0.165, 0.99)',
    top:'40%',
    left:'20px'
  },
  bar: {
    width: '100%',
    height: '2px',
    display: "block",
    position: "relative",
    background: Color.primary,
    transitionDelay:'0.2s',
    transition: 'all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99)',
    transform:props=>props.open?'rotate(90deg)':''
  } ,
  topbar: {
    transform: props => props.open ?"translateY(4px) rotate(45deg)": 'translateY(0px) rotate(0deg)',
  },
  bottombar: {
    transform: props => props.open ?"translateY(3px) rotate(-45deg)": "translateY(12px) rotate(0deg)"
  } 

});

function MobileHeader({ history, scroll,setScroll,scrollToTop, aboutRef ,projectsRef,contactRef }) {
  const [sele, setSele] = useState("");
  const [open ,setOpen] = useState(false)
  const [sticky, setSticky] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState(false);
  const classes = useStyles({
    sticky: sticky,
    navbar: navbar,
    color: color,
    sele: sele,
    open:open
  });

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    // wi。ndow.addEventListener("scroll", changeBackground);
  });

  useEffect(() => {
    let nn = window.location.pathname;
    // console.log(nn.split("/")[1]);
    if (nn.split("/")[1]) {
      setSele(nn.split("/")[1].toLowerCase());
    } else {
      setSele("");
    }
    if (nn.split("/")[1] === "services") {
      setColor(true);
    } else {
      setColor(false);
    }
  }, []);

  useEffect(() => {
    setSele(scroll)
  }, [scroll]);



  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <div className={classes.burger} onClick={()=>{setOpen(!open)}}>
          <div className={`${classes.bar} ${classes.topbar}`}></div>
          <div className={`${classes.bottombar} ${classes.bar}`}></div>
        </div>
      </div>
      <div className={classes.Logo} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>Gaseik.</div>
      <div className={classes.block}></div>
    </div>
  )

}

export default withRouter(MobileHeader);
