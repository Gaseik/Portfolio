import { makeStyles } from "@material-ui/core/styles";
import registerForm from "../../pages/registerForm";
import root from "../../pages/Routes";
import Color from "./style";


const height = 80;
const btns = {
  margin: "10px 20px",
  cursor: "pointer",
  fontSize: "14px",
  height: "25px",
  // align-items: center,
  textAlign: "center",
  verticalAlign: "bottom",
  paddingTop: "5px",
  textTransform: "uppercase",
  "&:hover": {
    color: Color.primary,
    transition: "all .2s ease-out",
    "&::after": {
      content: '""',
      //    width: 100px,
      height: "2px",
      display: "block",
      background: Color.primary,
      position: "relative",
      bottom: "0px",
      animationName: "lolo",
      animationDuration: ".5s",
    },
  },
};

export const useStyles = makeStyles({
  header: {
    top: 0,
    left: 0,
    backgroundColor: (props) =>
      props.register
        ? "white"
        : props.type==='partners'?Color.partners:props.type === "goverment"
        ? Color.second
        : props.type===root.personal?Color.pink:Color.primary,
    position: "fixed",
    height: height,
    // padding: 10px 100px,
    width: "100vw",
    // align-content: center,
    zIndex: "10",
    // margin:'0 4rem'
  },

  container: {
    width: "100%",
    flexWrap: "wrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: height,
    // margin:'0 4rem'
    // margin:'0 4rem'
  },
  modelS: {
    // paddingLeft:'100px'
    height: height,
    display: "flex",
    alignItems: "center",
    position: "fixed",
    left: "calc(50vw - 75px)",
  },
  Logo: {
    cursor: "pointer",
    padding: "0 0 0 0rem",
    display: "flex",
    justifyContent:'center',
    alignItems: "center",
    height: 24,
    width: 300,
    marginLeft:'2rem'
  },
  LogoText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "10px",
    color: (props) => (props.register ? "" : "white"),
    userSelect: "none",
  },
  headerBtns: {
    marginRight: (props) => (props.register ? "4rem" : "1rem"),
    fontSize: "14px",
    display: "flex",
    width: (props) => (props.register ? "" : ""),
    fontWeight: "bold",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btns: {
    margin: "0 20px",
    cursor: "pointer",
    fontSize: "14px",
    height: "25px",
    display: "flex",
    // background:'green',
    // width:190,
    flexDirection: "column",
    // alignItems:'center',
    justifyContent: "center",
    // alignItems: 'center',
    textAlign: "center",
    verticalAlign: "bottom",
    paddingTop: "2px",
    textTransform: "uppercase",
    "&:hover": {
      color: Color.primary,
      transition: "all .2s ease-out",
      "&::after": {
        content: '""',
        //    width: 100px,
        height: "2px",
        display: "block",
        background: Color.primary,
        position: "relative",
        bottom: "0px",
        animationName: "$lolo",
        animationDuration: ".5s",
      },
    },
  },
  SeleBtns: {
    margin: "10px 20px",
    cursor: "pointer",
    fontSize: "14px",
    height: "25px",
    // background:'green',
    // width:190,
    display: "flex",
    flexDirection: "column",
    // alignItems:'center',
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "bottom",
    paddingTop: "5px",
    userSelect: "none",
    textTransform: "uppercase",
    "&:hover": {
      color: Color.primary,
      transition: "all .2s ease-out",
      "&::after": {
        content: '""',
        //    width: 100px,
        height: "2px",
        display: "block",
        background: Color.primary,
        position: "relative",
        bottom: "0px",
        animationName: "$lolo",
        animationDuration: ".5s",
      },
    },

    "&::after": {
      content: '""',
      height: "2px",
      display: "block",
      background: Color.primary,
      position: "relative",
      bottom: "0px",
    },
  },
  "@keyframes lolo": {
    "0%": {
      opacity: 0,
      bottom: "-4px",
    },
    "100%": {
      opacity: 1,
      bottom: "0px",
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
});
