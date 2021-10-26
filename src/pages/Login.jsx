import * as React from "react";
import { makeStyles, styled } from "@mui/styles";
import { withRouter } from "react-router";
import Image22 from "../img/login.png";
import Loading from '../Component/loading'

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Logo from "../img/SVG/logo";
import color, { style } from "../styles/js/style";
import { SiWechat } from 'react-icons/si'
import { BsPerson, BsCheckSquare, BsSquare, BsApple, BsMicrosoft, BsGoogle } from "react-icons/bs";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import { BiLock } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    minHeight: 'calc(100vh - 170px)',
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    background: 'linear-gradient(229.87deg, rgba(22, 22, 22, 0) 38.24%, rgba(0, 97, 170, 0.52) 101.59%), #161616',
    backgroundImage: `url(${Image22})`,
  },
  pannel: {
    padding: "50px",
    width: "20%",
    height: "50%",
    // marginTop: "50px",
    minWidth: "350px",
    minHeight: "500px",
    background:
      "linear-gradient(220.1deg, rgba(255, 255, 255, 0.04) 3.99%, rgba(255, 255, 255, 0.056) 115.92%)",
    boxShadow: " 3px 7px 19px rgba(3, 3, 3, 0.24)",
    "backdrop-filter": "blur(50px)",
    "border-radius": "20px",
    overflow: "auto",
    margin: 'auto',
  },
  logo: {
    marginBottom: "2rem"
  },
  title: {
    fontSize: 20,
    margin: "0.5rem 0"
  },
  dnone: {
    display: "none"
  },
  inputs: {
    margin: "2rem auto ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 24,
    width: "20%"
  },
  input: {
    width: "80%"
  },
  re: {
    display: "flex",
    alignItems: "center",
    width: "110px",
    cursor: "pointer",
    justifyContent: "space-between",
    "&:hover": {
      color: color.primary,
      transition: "all .1s ease-in-out"
    }
  },

  radio: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "12px",
    height: "12px",
    borderRadius: "2px",
    border: "1px solid " + color.border
  },
  create: {
    cursor: "pointer",
    "&:hover": {
      color: color.primary,
      transition: "all .1s ease-in-out"
    }
  },
  bar: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    fontSize: 14,
    justifyContent: "space-between"
  },
  login: {
    ...style.btn,
    width: "40%",
    margin: "2rem auto",
    borderRadius: "50px",
    backgroundColor: color.primary,
    justifyContent: "center",
    height: "40px"
  },
  line: {
    height: "1px",
    width: "90%",
    backgroundColor: color.border,
    opacity: .3,
    margin: '0 auto'
  },
  or: {
    margin: '1rem auto',
    color: color.greyDark,
    fontSize: 10
  },
  btns: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    margin: "2rem auto",
    justifyContent: "space-between",
    fontSize: 20
  },
  btn: {
    cursor: "pointer",
    "&:hover": {
      color: color.primary,
      transition: "all .2s ease-in-out"
    }
  },
  disbtn: {
    color: '#4d5052'
  },
  footer: {
    justifySelf: 'end',
    display: 'flex',
    fontSize: '10px',
    justifyContent: 'space-between',
    width: "100%"
  },
}));

const CssTextField = styled(TextField)({
  color: "#fff",
  width: "100%",
  root: {
    width: "100%"
  },
  "& label.Mui-focused": {
    color: color.greyDark
  },
  "& .MuiInput-underline:after": {},
  "& root": {
    width: "100%"
  },
  "& MuiFormControl-root": {
    width: "100%",
    margin: "0"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: color.greyDark
    },
    color: "#fff",
    fontFamily: "Segoe UI",
    width: "100%",
    fontSize: 14,
    "&:hover fieldset": {
      borderColor: color.grey
    },
    "&.Mui-focused fieldset": {
      borderColor: color.grey
    }
  }
});

function Login() {
 
  const [isloading, setIsloading] = React.useState(true)
  const classes = useStyles({isloading:isloading});
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    remeber: false,
    showPassword: false
  });

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setValues({ ...values, [name]: value });
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  React.useEffect(() => {
    fetch(Image22)
      .then(resp => resp.blob())
      .then(blob => {
        let url = URL.createObjectURL(blob);
        let img = new Image();
        // Image loading is an asynchronous operation
        img.onload = e => {
          setIsloading(false)
        }
        img.src = url;
      });
  })


  return (
    <div className={classes.container}>
      <Loading isloading={isloading} />
      <div className={classes.back}></div>
      <div className={classes.pannel}>
        <div className={classes.logo}>
          <Logo />
        </div>
        {/* <div className={classes.title}>Log in your account</div> */}
        <div className={classes.inputs}>
          {/* <div className={classes.icon}>
            <BsPerson />
          </div> */}
          <div className={classes.input}>
            <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              <CssTextField
                fullWidth
                id="outlined-adornment-password"
                name="userName"
                placeholder="Username"
                type={"text"}
                value={values.userName}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <BsPerson fontSize={24} style={{ margin: "0 1rem 0 0" }} />
                  )
                }}
              // color="#fff"
              />
            </FormControl>
          </div>
        </div>
        <div className={classes.inputs}>
          {/* <div className={classes.icon}>
            <BiLock />
          </div> */}
          <div className={classes.input}>
            <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              <CssTextField
                fullWidth
                id="outlined-adornment-password"
                name="password"
                placeholder="Password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <BiLock fontSize={24} style={{ margin: "0 1rem 0 0" }} />
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        color="primary"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <MdOutlineRemoveRedEye color={color.greyDark} />
                        ) : (
                          <RiEyeCloseLine color={color.greyDark} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              // color="#fff"
              />
            </FormControl>
          </div>
        </div>
        <div className={classes.bar}>
          <div
            className={classes.re}
            onClick={() => setValues({ ...values, remeber: !values.remeber })}
          >
            {values.remeber ? <BsCheckSquare /> : <BsSquare />}Remember Me
          </div>
          <div className={classes.create}>Create Account</div>
        </div>
        <div className={classes.login}>Log In</div>
        <div className={classes.line}></div>
        <div className={classes.or}>or login with</div>
        <div className={classes.btns}>
          <div className={classes.disbtn}><BsApple /></div>
          <div className={classes.btn}> <BsMicrosoft /></div>
          <div className={classes.btn}>  <BsGoogle /></div>
          <div className={classes.disbtn}>   <SiWechat /></div>

        </div>
        <div className={classes.footer}>
          <div className={classes.btn}>Forget Password?</div>
          <div className={classes.btn}>Terms and Conditions</div>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}

export default Login;
