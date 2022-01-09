import * as React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { withRouter } from "react-router";
import { RiSearch2Line } from "react-icons/ri";
import Color from "../styles/js/style";
import { NavLink } from "react-router-dom";
import Image2 from "../img/homepage.png";
import { useScrollPosition } from "./useScrollPosition";
let height = "100px";
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
  paddingTop: "2px",
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
    transform: (props) =>
      !props.sticky ? "translateY(-100%)" : "translateY(0)",
    transition: "transform 300ms ease-in-out",
    position: "fixed",
    height: height,
    width: "100vw",
    zIndex: "10",
    flexWrap: "wrap",
    display: "flex",
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
  headerBtns: {
    marginRight: (props) => (props.register ? "4rem" : "1rem"),
    fontSize: "24px",
    display: "flex",
    width: (props) => (props.register ? "" : ""),
    // fontWeight: "bold",
    justifyContent: "space-between",
    alignItems: "end",
    color: "#fff",
    height: "40px",
  },

  search: {
    margin: "0 30px",
    cursor: "pointer",
    fontSize: "16px",
    height: "25px",
    display: "flex",
    color: (props) => (props.color ? "#000" : "#fff"),
    // background:'green',
    // width:190,
    flexDirection: "column",
    // alignItems:'center',
    justifyContent: "center",
    // alignItems: 'center',
    textAlign: "center",
    verticalAlign: "bottom",
    paddingTop: "2px",
    // textTransform: "uppercase",
    "&:hover": {
      color: Color.primary,
      transition: "all .2s ease-out",
    },
  },
  btns: {
    margin: "0 30px",
    cursor: "pointer",
    fontSize: "18px",
    height: "25px",
    display: "flex",
    color: (props) => (props.navbar ? "#fff" : Color.primaryDark),
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "bottom",
    paddingTop: "2px",
    position: "relative",
    transition: "all .2s ease-out",

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
        bottom: "-2px",
        // bottom: "-3px",
        animationName: "$lolo",
        animationDuration: ".5s",
      },
    },
  },
  SeleBtns: {
    margin: "0px 30px",
    cursor: "pointer",
    fontSize: "18px",
    height: "25px",
    // background:'green',
    // width:190,
    color: Color.primary,
    display: "flex",
    flexDirection: "column",
    // alignItems:'end',
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "bottom",
    paddingTop: "5px",
    userSelect: "none",
    position: "relative",
    "&::after": {
      content: '""',
      width: "100%",
      //  width: 100px,
      height: "2px",
      display: "block",
      background: Color.primary,
      position: "absolute",
      bottom: "-2px",
    },
    "&:hover": {
      color: Color.primary,
      transition: "all .2s ease-out",
      "&::after": {
        content: '""',
        width: "100%",
        //  width: 100px,
        height: "2px",
        display: "block",
        background: Color.primary,
        position: "absolute",
        bottom: "-2px",
        animationName: "$lolo",
        animationDuration: ".5s",
      },
    },
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
      bottom: "-2px",
    },
  },
  LanCh: {
    display: "flex",
    height: height,
    alignItems: "center",
  },
  mid: {
    display: "block",
    width: "2px",
    margin: "0 2px",
    height: "14px",
    backgroundColor: "black",
  },
  LanBtn: {
    fontSize: 14,
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      color: (props) => (props.register ? Color.primary : "white"),
      transition: "all .2s ease-out",
    },
  },
  SLanBtn: {
    fontSize: 14,
    cursor: "pointer",
    color: (props) => (props.register ? Color.primary : "white"),
    userSelect: "none",
  },
  user: {
    display: "flex",
    alignItems: "center",
    margin: "0 2rem",
    fontSize: 16,
    fontWeight: "normal",
    userSelect: "none",
  },
  Avatar: {
    marginLeft: ".5rem",
  },
  right: {
    color: "#fff",
    display: "flex",
    right: "0",
    position: "absolute",
    height: 40,
  },
  login: { ...login },
  loginPage: {
    ...login,
    color: Color.primary,
    "&::after": {
      content: '""',
      height: "2px",
      display: "block",
      background: Color.primary,
      position: "relative",
      bottom: "0px",
      borderRadius: 2,
    },
  },
  contactUs: {
    cursor: "pointer",
    // border: "2px solid #0090FD",
    // borderRadius: "8px",
    color: (props) => (props.sele === "contact" ? "#fff" : Color.primary),
    margin: "0 100px 0 30px",
    fontSize: "16px",
    width: "140px",
    height: "40px",
    display: "flex",
    fontWeight: "bold",
    flexDirection: "column",
    backgroundColor: (props) => (props.sele === "contact" ? Color.primary : ""),
    justifyContent: "center",
    // alignItems: 'center',
    textAlign: "center",
    verticalAlign: "bottom",
    "&:hover": {
      color: (props) => "#fff",
      backgroundColor: Color.primary,
      borderColor: (props) => (props.color ? Color.primary : ""),
      transition: "all .3s ease-in-out",
      // backgroundColor:'rgba(0,144,253,0.5)'
    },
  },
});

function Header({ history, scrollToTop, aboutRef ,projectsRef,contactRef }) {
  const [sele, setSele] = useState("");
  const [sticky, setSticky] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState(false);

  const classes = useStyles({
    sticky: sticky,
    navbar: navbar,
    color: color,
    sele: sele,
  });


  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

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
    console.log()
  }, []);




  return (
    <div className={classes.container}>
      <div className={classes.Logo} onClick={()=>{ window.scrollTo({ top: 0, behavior: "smooth" });}}>Gaseik.</div>
      <div className={classes.headerBtns}>
        <div
          className={sele === "projects" ? classes.SeleBtns : classes.btns}
          onClick={() => {
            // history.push("/projects");
            setSele("projects");
            projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // window.scrollTo({top:0,behavior:'smooth'})
            setColor(true);
          }}
        >
          Projects
        </div>
        <div
          className={sele === "about" ? classes.SeleBtns : classes.btns}
          onClick={() => {
            setSele("about");
            // history.push("/about");
            aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // scrollToTop('about')
            // window.scrollTo({ top: 0, behavior: "smooth" });
            setColor(false);
          }}
        >
          About
        </div>

        <div
          className={sele === "contact" ? classes.SeleBtns : classes.btns}
          onClick={() => {
            history.push("/contact");
            setSele("contact");
            contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setColor(false);
          }}
        >
          Contact
        </div>


      </div>
      <div className={classes.right}>
        {/* <div
          className={sele === "contact" ? classes.loginPage : classes.login}
          onClick={() => {
            setSele("contact");
            history.push("/contact");

            setColor(false);
          }}
          transition="glide-right"
          // to="/login"
        >
          Contact
        </div> */}
        {/* <div
          className={classes.contactUs}
          onClick={() => {
            setSele("contact");
            history.push("/contact");
            
            setColor(false);
          }}
        >
          Contact Us
        </div> */}
      </div>
    </div>
  );
}

export default withRouter(Header);
