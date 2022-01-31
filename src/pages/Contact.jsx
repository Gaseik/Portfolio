import * as React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import color, { style, breakpoints } from "../styles/js/style";
import { withRouter } from "react-router";
import Image2 from "../img/6dc7cbdfeb72054c317824f67ca6368a.jpeg";
import { HiDownload } from "react-icons/hi";
import { useForm, ValidationError } from "@formspree/react";

const inputStyle = {
  padding: "1.5rem 2rem",
  fontSize: 16,
  outline: "none",
  width: "100%",
  color: "#000",
  border: "2px solid " + color.primary,
  background: "transparent",
  "& input:focus-visible": {
    outline: "none",
    border: "none",
  },
  "input:focus": {
    outline: "none",
    border: "none",
  },
  [breakpoints.md]: {
    border: "1px solid #fff",
    padding: "1.5rem 2rem",
    borderRadius: "4px",
  },
  [breakpoints.xs]: {
    padding: "1.2rem 1rem",
    borderRadius: "4px",
    fontSize: "12px",
  },
};

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
    ...inputStyle,
    width: "100%",
    fontFamily: "Playfair Display",
    marginBottom: "1rem",
  },
  out: {
    border: "1px solid " + color.primaryDark,
    height: "5rem",
  },
  form: {
    // background: color.pink,
  },
  MutiStyle: {
    padding: "1.5rem 2rem",
    border: "2px solid " + color.primary,
    background: "transparent",
    fontSize: 16,
    outline: "none",
    width: "100%",
    color: color.primaryDark,
    resize: "none",
    fontFamily: "Playfair Display",
    // background: "transparent",
    "& input:focus-visible": {
      outline: "none",
      border: "none",
    },
    "input:focus": {
      outline: "none",
      border: "none",
    },
    [breakpoints.xs]: {
      fontSize: "12px",
    },
  },
  submit: {
    backgroundColor: color.primaryDark,
    height: "100%",
    display: "flex",
    width: "100%",
    fontFamily: "Playfair Display",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
    cursor: "pointer",
    borderRadius: "20px",
    border: 'none',
    "&:hover": {
      color: color.primary,
      // opacity:.7,
      transition: 'all .3s ease-in-out'
    }
    // border: "10px solid "
  },
  send: {
    ...style.btn,
    width: "25%",
    borderRadius: "30px",
    justifySelf: "inherit",
    margin: "2rem auto",
    alignItems: "center",
    justifyContent: "center",
    background: 'transparent',
    fontFamily: 'Playfair Display',
    fontSize: '1.25rem',

  },
  success: {
    background: color.primaryDark,
    width: "80%",
    borderRadius: "30px",
    border: "3px solid " + color.primaryDark,
    height: "20px",
    maxWidth: "200px",
    position: "fixed",
    // top: props=>props.open?'100px':'-100px',
    top:-100,
    transition:'all .5s ease-in-out',
    color:'#fff',
    padding:'1rem 20px',
    // margin: '0 auto',
    right: 'calc(50% - 120px)',
  
  },
  ani:{
    animationName:"$suc1",
    animationDuration: "5s",
  },
  "@keyframes suc1": {
    "0%": {
      top: "-100px",
    },
    "20%": {
      top: "100px",
    },
    "80%":{
      top: "100px",
    },
    "100%":{
      top: "-100px",
    }
  },
}));

function Contact({ contactRef, setScroll }) {
  const [data, set] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [open,setOpen]= React.useState(false)
  const [state, handleSubmit] = useForm("xvolgnbp");
  const classes = useStyles();

  React.useEffect(()=>{
    if(state.succeeded){
      setOpen(true)
   
    
    }
  },[state])



  return (
    <div className={classes.container} onMouseEnter={() => setScroll('contact')} ref={contactRef}>
      <div className={classes.title}>
        <div className={classes.titleName} id={"about"}>
          Contact
        </div>
        <div className={classes.bar}></div>
      </div>
      <Success open={open} setOpen={setOpen}/>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={10} md={6}>
            <div className={classes.form}>
              <input
                type="text"
                className={classes.input}
                placeholder="Name"
                name="name"
                key="name"
              />
              <input
                // type="text"
                className={classes.input}
                placeholder="Email"
                name="email"
                type="email"
                key="email"
              />
              <input
                type="text"
                className={classes.input}
                placeholder="Subject"
                name="subject"
                key="sub"
              />

              <textarea
                type="text"
                className={classes.MutiStyle}
                rows={4}
                // multipleplaceholder="Subject"
                key="message"
                id="message"
                name="message"
                placeholder="Leave your message here...."
              />
            </div>
            <button type="submit"   disabled={state.submitting} className={classes.send}>Submit</button>
          </Grid>
          {/* <Grid item xs={2} md={3}>
            <button type="submit" disabled={state.submitting} className={classes.submit}>SEND</button>
          </Grid> */}
        </Grid>
      </form>
    </div>
  );
}

export default withRouter(Contact);

function Success({open,setOpen}) {
  const classes = useStyles({open:open})

  // React.useEffect(()=>{
  //   if(open){
    
  //   }
    
  // },[open])


  return ( 
    <div className={`${classes.success} ${open?classes.ani:''}`}>
      Thank you for contacting !
    </div>
  )
}
