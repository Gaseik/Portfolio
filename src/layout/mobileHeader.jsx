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

  Mcontainer: {
    top: 0,
    left: 0,
  
    transition: "transform 300ms ease-in-out",
    position: "fixed",
    height:height,
    width: "100vw",
    zIndex: "10",
    flexWrap: "wrap",
    display: "flex",
    transitionDelay: '0.2s',
    justifyContent: "space-between",
    alignItems:  "center",
    background: (props) => (!props.navbar ? "" : Color.primaryDark),
  },
  panel: {
    // padding:'4rem 0',
    zIndex:20,
    opacity: props=>props.open?1:0,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top:0,
    width: "100%",
    transitionDelay: '0.4s',
    transition: 'all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99) ',
    height: props=>!props.open?"0":"100vh",
    background: (props) => props.open?Color.primaryDark:'transparent'
  },
  LogoM: {
    cursor: "pointer",
    // padding: "0 0 0 0rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    fontSize: 36,
    width: 180,
    zIndex:21,
    position: "relative",
    transitionDelay: '0.2s',
    transition: 'all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99)',
    color: (props) => (props.navbar || props.open ? Color.primary : Color.primaryDark),
    // fontWeight: "bold",
    // margin: "0 2% 0 5%",
  },
  block:{
    display: "block",
    width:'50px',
    height:'2px'
  },
  menu:{
    zIndex:21,
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
    width:'20px',
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
    background: props => props.open || props.navbar ?Color.primary: Color.primaryDark,
    transitionDelay:'0.2s',
    transition: 'all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99)',
    transform:props=>props.open?'rotate(90deg)':''
  } ,
  topbar: {
    transform: props => props.open ?"translateY(4px) rotate(45deg)": 'translateY(0px) rotate(0deg)',
  },
  bottombar: {
    transform: props => props.open ?"translateY(3px) rotate(-45deg)": "translateY(12px) rotate(0deg)"
  } ,
  midbar: {
    opacity:props=>props.open?0:1,
  transform: "translateY(3px) rotate(0deg)"
  },
  btns: {
    margin: " 4rem 0",
    cursor: "pointer",
    fontSize: "24px",
    height: "25px",
    display: "flex",
    color: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "bottom",
    paddingTop: "2px",
    position: "relative",
    transition: "all .2s ease-out",
    width: "20%",
    minWidth: "100px",
    "&:hover": {
      color: Color.primary,
      transition: "all .2s ease-out",
      "&::after": {
        content: '""',
        // width: "100px",
        height: "2px",
        display: "block",
        width: "100%",
        background: Color.primary,
        position: "absolute",
        bottom: "-5px",
        // bottom: "-3px",
        animationName: "$lolo",
        animationDuration: ".5s",
      },
    },
  },
  SeleBtns: {
    // background:'green',
    // width:190,
    color: Color.primary,
    paddingTop: "5px",
    userSelect: "none",
    "&::after": {
      content: '""',
      width: "100%",
      //  width: 100px,
      height: "2px",
      display: "block",
      background: Color.primary,
      position: "absolute",
      bottom: "-4px",
    }
  },
  "@keyframes lolo": {
    "0%": {
      opacity: 0,
      width: "0%",
      bottom: "-10px",
    },
    "100%": {
      opacity: 1,
      width: "100%",
      bottom: "-5px",
    },
  },

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
    window.addEventListener("scroll", changeBackground);
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
  
  const navList = [
    {name:'Projects',
  ref:projectsRef},{name:'About',ref:aboutRef},{name:'Contact',ref:contactRef}
  ]



  return (
    
    <div className={classes.Mcontainer}>
     
        <div className={classes.menu}>
          <div className={classes.burger} onClick={() => { setOpen(!open) }}>
            <div className={`${classes.bar} ${classes.topbar}`}></div>
            <div className={`${classes.bottombar} ${classes.bar}`}></div>
          <div className={`${classes.midbar} ${classes.bar}`}></div>
          </div>
        </div>
        <div className={classes.LogoM} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>Gaseik.</div>
        <div className={classes.block}></div>
        <div className={classes.panel}>
          {navList.map((n)=>(
            <div
              className={sele === n.name.toLowerCase() ? `${classes.SeleBtns} ${classes.btns}` : classes.btns}
              onClick={() => {
                history.push(`/${n.name.toLowerCase()}`);
                setSele(n.name.toLowerCase());
                setScroll(n.name.toLowerCase())
                n.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setColor(false);
                setOpen(false)
              }}
            >
             {n.name}
            </div>
          ))}
        </div>
     
    </div>
  )

}

export default withRouter(MobileHeader);
