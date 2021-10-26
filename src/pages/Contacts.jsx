import * as React from "react";
import { makeStyles, styled } from "@mui/styles";
import { withRouter } from "react-router";
import ContactImage from "../img/contacts.png";
import { useEffect } from "react";
import TextField from "@mui/material/TextField"; 
import color, { style } from "../styles/js/style";
import Loading from '../Component/loading'



export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100%",
    display: "flex",
    minHeight: "calc(100vh - 170px) ",
    // minHeight:'100%',
    // overflow:'auto',
    flexDirection: "column",
    alignItems: "center",
    // padding:'0 150px',
    justifyContent: "space-around",
    color: "#fff",
  },
  back: {
    width: "100vw",
    height: "100vh",
    top: 0,
    zIndex: -1,
    position: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // background: 'linear-gradient(229.87deg, rgba(22, 22, 22, 0) 38.24%, rgba(0, 97, 170, 0.52) 101.59%), #161616',
    backgroundImage: `url(${ContactImage})`,
  },
  top: {
    textAlign: "initial",
    width: "90%",
    margin: "0 0 3rem 0",
    fontSize: 48,
  },
  half: {
    width: "50%",
    margin: "0 4rem",
  },
  halfs: {
    borderRight: "1px solid " + color.greyDark,
    width: "50%",
  },
  bot: {
    // background: color.partners,
    // height: "550px",
    width: "90%",
    display: "flex",
  },
  offices: {
    width: "100%",
    fontSize: 32,
    textAlign: "initial",
    margin: "0 0 2rem 0",
  },
  locations: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  location: {
    width: "30%",
    marginBottom: "1rem",
    textAlign: "initial",
    fontSize: 12,
    lineHeight: "26px",
    "& p": {
      margin: "0",
      fontWeight: "bold",
    },
  },
  title: {
    fontSize: 20,
  },
  locationName: {
    fontWeight: "bold",
    color: color.primary,
  },
  content: {},
}));


const Offices = [
  {
    name: "Head Office",
    locations: [
      {
        name: "Hsinchu",
        address:
          "4F., No.3 Propeperity Rd. 1, Science Partk, Hsinchu 300, Taiwan ",
        phone: "+886 035645166",
      },
    ],
  },
  {
    name: "Taiwan",
    locations: [
      {
        name: "Taipei",
        address:
          "12F., No.325, Sec. 4, Zhongxiao E. Rd., Daan Dist., Taipei City 106, Taiwan",
        phone: " +886 227370908",
      },
      {
        name: "Kaohsiung",
        address:
          " 10F., No.251, Minghua Rd., Gushan Dist., Kaohsiung City 804, Taiwan ",
        phone: "",
      },
    ],
  },
  {
    name: "China",
    locations: [
      {
        name: "Shenzhen",
        address:
          " W1-A-611A, Virtual University Park, Shenzhen City Science Park South, Nanshan District, Shenzhen, PRC ",
        phone: "+852 3902 9568",
      },
    ],
  },
  {
    name: "Korea",
    locations: [
      {
        name: "Seoul",
        address: " 827-64, Yeoksam-dong, Gangnam-gu, Seoul, Republic of Korea",
        phone: "+82 2 400 4133",
      },
    ],
  },

  {
    name: "Thailand",
    locations: [
      {
        name: "Bangkok",
        address:
          " 20th Floor Metropolis Building, Suite 29, 725 Sukumvit Road Klongton Nuea, Watthana, Bangkok 10110 ",
        phone: "+662-153-3523",
      },
    ],
  },
  {
    name: "Malaysia",
    locations: [
      {
        name: "Kuala Lumpur",
        address:
          "3.02D(East Wing),Level 3 Menara BRDB, 285, Jalan Maarof, Bukit Bandaraya, 59000 Kuala Lumpur, Malaysia",
        phone: "+603 2297 3633",
      },
    ],
  },
];

function Login() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(true);

  

  React.useEffect(() => {
    fetch(ContactImage)
      .then(resp => resp.blob())
      .then(blob => {
        let url = URL.createObjectURL(blob);
        let img = new Image();
        // Image loading is an asynchronous operation
        img.onload = e => {
          console.log(img)
          console.log('async', img.naturalWidth, img.complete);
          setIsLoading(false)
        }
        img.src = url;
      });
  })
  return (
    <div className={classes.container}>
      <Loading isloading={isLoading}/>
          <div className={classes.back}></div>
          <div className={classes.top}>
            <div className={classes.half}>Contact Us</div>
          </div>
          <div className={classes.bot}>
            <Form />
            <div className={classes.half}>
              <div className={classes.offices}>Offices</div>
              <div className={classes.locations}>
                {Offices.map((o) => (
                  <div className={classes.location}>
                    <div className={classes.title}>{o.name}</div>
                    {o.locations.map((l) => (
                      <div>
                        <div className={classes.content}>
                          <a className={classes.locationName}>{l.name}</a> |{" "}
                          {l.address}
                        </div>
                        <p className={classes.phone}>Tel: {l.phone}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
    </div>
  );
}

export default Login;

export const FormStyles = makeStyles((theme) => ({
  halfs: {
    borderRight: "1px solid " + color.greyDark,
    width: "50%",
    boxSizing: "border-box",
  },

  container: {
    // background:'#dfdfdf',
    display: "flex",
    flexDirection: "column",
    // padding:'0 150px'
    width: "70%",
    margin: "0rem 4rem 2rem 4rem",
  },
  container2: {
    // background:'#dfdfdf',
    display: "flex",
    flexDirection: "column",
    // padding:'0 150px'
    width: "70%",
    margin: "0rem 4rem 1rem 4rem",
  },
  sele: {
    width: "100%",
    border: "1px solid " + color.grey,
    borderRadius: "8px",
    display: "flex",
    margin: "1rem 0 0 0",
  },
  containers: {
    // background:'#dfdfdf',
    display: "flex",
    flexDirection: "column",
    // padding:'0 150px'
    width: "70%",
    border: "1px solid " + color.grey,
    borderRadius: "8px",

    margin: "0rem 4rem 2rem 4rem",
  },
  label: {
    fontSize: "14px",
    textAlign: "initial",
    width: "100%",
    color: color.grey,
  },
  name: {
    background: "transparent",
    color: color.grey,
    // borderBottom:'1px solid ' + color.greyLight,
    outline: 0,
    padding: "12px 20px",
    display: "inline-block",
  },
  send: {
    // background: "#dfdfdf",
    border: "1px solid " + color.grey,
    width: "50%",
    margin: "0rem auto 2rem auto",
    fontSize: "18px",
    padding: "12px 0",
    borderRadius: "40px",
    cursor: "pointer",
    transition: "all .3s ease-in-out",
    "&:hover": {
      borderColor: "rgba(255,255,255,1)",
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
}));

const inputStyle = {
  padding: "12px 0px 8px 0",
  border: "none",
  fontSize: 16,
  outline: "none",
  // padding:'5px 12px',
  // color: color.greyLight,
  color: "#fff",
  borderBottom: "1px solid " + color.grey,
  background: "transparent",
  "& input:focus-visible": {
    outline: "none",
    border: "none",
  },
  "input:focus": {
    outline: "none",
    border: "none",
  },
};

const SeleStyle = {
  padding: "12px 0px",
  border: "none",
  fontSize: 16,
  outline: "none",
  width: "100%",
  borderRadius: "8px",
  margin: "0 10px",
  // padding:'5px 12px',
  color: color.grey,
  // border: "1px solid " + color.grey,
  background: "transparent",
  "& input:focus-visible": {
    outline: "none",
    border: "none",
  },
  "input:focus": {
    outline: "none",
    border: "none",
  },
};

const MutiStyle = {
  padding: "12px 20px",
  border: "none",
  fontSize: 16,
  outline: "none",
  color: "#fff",
  // broderRadius:"12px",
  // border: "1px solid " + color.grey,
  fontFamily: "-apple-system",
  background: "transparent",
  "& input:focus-visible": {
    outline: "none",
    border: "none",
  },
  "input:focus": {
    outline: "none",
    border: "none",
  },
};

function Form({}) {
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    topic: "1",
  });
  const cla = FormStyles();

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setValues({ ...values, [name]: value });
  }

  return (
    <form action="" className={cla.halfs}>
      <div className={cla.container}>
        <div className={cla.label}>Name*</div>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          name="name"
          style={inputStyle}
        />
      </div>
      <div className={cla.container}>
        <div className={cla.label}>Email*</div>
        <input
          type="text"
          value={values.email}
          onChange={handleChange}
          name="email"
          style={inputStyle}
        />
      </div>
      <div className={cla.container2}>
        <div className={cla.label}>Topics</div>
        <div className={cla.sele}>
          <select
            type="text"
            value={values.topic}
            onChange={handleChange}
            name="topic"
            style={SeleStyle}
            placeholder="Select a topic"
          >
            <option value="1" disabled>
              Select a topic
            </option>
            <option vlaue="t">Technical Support</option>
            <option value="b">Bussiness</option>
          </select>
        </div>
      </div>
      <div className={cla.containers}>
        <textarea
          type="text"
          value={values.remark}
          onChange={handleChange}
          name="remark"
          rows="7"
          style={MutiStyle}
        />
      </div>
      <div className={cla.container}>
        <div className={cla.send}>Send</div>
      </div>
    </form>
  );
}
