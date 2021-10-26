import * as React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import { useSpring, animated, config } from "@react-spring/web";
import { HiDownload } from "react-icons/hi";
import Loading from '../Component/loading'
// material ui tabs
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
//images
import NaasImage from "../img/Product/NaaS.png";
import MassImage from "../img/Product/MaaS.png";
import SaasImage from "../img/Product/SaaS.png";
import RaasImage from "../img/Product/RaaS.png";
//icons
import Access from "../img/SVG/Products/Naas/Access";
import Plane from "../img/SVG/Products/Naas/Plane";
import Awareness from "../img/SVG/Products/Naas/Awareness";
import CloudBonding from "../img/SVG/Products/Naas/CloudBonding";
import CloudSwift from "../img/SVG/Products/Naas/CloudSwift";
import UnifiedAccess from "../img/SVG/Products/Naas/UnifiedAccess";
import Nexus from "../img/SVG/Products/Naas/Nexus";
import BorderTransport from "../img/SVG/Products/Naas/BorderTransport";
import NetworkBonding from "../img/SVG/Products/Naas/NetworkBonding";
import NetworkSwift from "../img/SVG/Products/Naas/NetworkSwift";
import Constitution from "../img/SVG/Products/RaaS/Constitution";
import Directory from "../img/SVG/Products/RaaS/Directory";
import Geospatial from "../img/SVG/Products/RaaS/Geospatial";
import AssociatedBonding from "../img/SVG/Products/RaaS/AssociatedBonding";
import PublicSwift from "../img/SVG/Products/RaaS/PublicSwift";
import ExperienceInsight from "../img/SVG/Products/SaaS/ExperienceInsight";
import DataHarmonic from "../img/SVG/Products/SaaS/DataHarmonic";
import IntellegenceSymbiosis from "../img/SVG/Products/SaaS/IntellegenceSymbiosis";
import TalentBonding from "../img/SVG/Products/SaaS/TalentBonding";
import TalentSwift from "../img/SVG/Products/SaaS/TalentSwift";
import Identity from "../img/SVG/Products/MaaS/Identity";
import FI from "../img/SVG/Products/MaaS/FI";
import MI from "../img/SVG/Products/MaaS/MI";
import UI from "../img/SVG/Products/MaaS/UI";
import Bifrost from "../img/SVG/Products/MaaS/Bifrost";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    // position: "relative",
    // padding: "0 200px",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  left: {
    width: "40%",
    hight:'100%',
    margin: "0 2rem",
    // backgroundColor:"#dfdfdf"
  },
  "@media (max-width: 600px)": {
    left: {
      width: "90%",
      margin: "0 1rem",

      // backgroundColor:"#dfdfdf"
    },
  },
  right: {
    // minWidth: "800px",
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 2rem",
    height: "100%",
    minHeight: "700px",
    //  borderLeft: "1px solid #dfdfdf",
    // height: "700px",
    // backgroundColor: color.second,
  },
  img: {
    // border: "1px solid #dfdfdf",
    // maxHeight:'100%',
    maxHeight:'500px',
    maxWidth:"100%",
    // width: "100%",
  },
  tab: {
    width: "25%",
  },
  TabTitle: {
    textTransform: "capitalize",
  },
  bar: {
    width: "100%",
    position: "relative",
    hight: "2px",
    display: "block",
    backgroundColor: color.greyLight,
  },
  tabs: {
    width: "100%",
    position: "relative",
    display: "flex",
    "&::before": {
      content: '""',
      height: "2px",
      display: "block",
      background: "#dfdfdf",
      position: "absolute",
      bottom: "0px",
      width: "100%",
    },
  },
  mid: {
    widtj: "100%",
    fontSize: "14px",
    textAlign: "initial",
    padding: "2rem 0px 0 0 ",
  },
  top: {
    display: "flex",
    width: "100%",
    height: "110px",
    // backgroundColor: color.info,
    justifyContent: "space-between",
  },
  title: {
    width: "50%",
    textAlign: "initial",
    alignSelf: "end",
    "& h3": {
      margin: "0",
      fontSize: "72px",
      fontWeight: "normal",
    },
    "& p": {
      margin: "0",
      fontSize: "14px",
    },
  },
  topRight: {
    width: "50%",
    display: "flex",
    // position:'relative',
    height: "100%",
    // justifySelf: "end",
    justifyContent: "end",
  },
  download: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: color.primary,
    color: color.primary,
    width: "60%",
    border: "1px solid ",
    padding: ".5rem ",
    alignSelf: "end",
    justifySelf: "end",
    // position: "absolute",
    // bottom: 0,
    // right:'0',
    height: 20,
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: color.primary,
      color: "#fff",
      transition: "all .3s ease-in-out",
    },
  },
  downloadBorderLess: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    borderRadius: 8,
    // borderColor: color.primary,
    color: color.primary,
    width: "40%",
    minWidth: "270px",
    // backgroundColor:color.partners,
    // border: "1px solid ",
    padding: ".5rem 0",
    alignSelf: "end",
    // position: "absolute",
    // bottom: 0,
    // right:'0',
    height: 20,
    fontWeight: "bold",
    cursor: "pointer",
    // "&:hover": {
    //   backgroundColor: color.primary,
    //   color: "#fff",
    //   transition: "all .3s ease-in-out",
    // },
  },
  cards: {
    width: "100%",
    padding: "2rem 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderBottom: "1px solid " + color.grey,

    // background:color.info
  },
  seleCard: {
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    width: "18%",
    minHeight: "110px",
    margin: "5px 0",
    color: "#fff",
    borderRadius: 8,
    background: color.primary,
    "& p": {
      width: "90%",
      minHeight: "40px",
      margin: ".5rem 0 0 0",
      "word-wrap": "break-word",
    },
  },
  card: {
    borderRadius: 8,
    minHeight: "110px",
    margin: "5px 0",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    width: "18%",
    "& p": {
      width: "90%",
      margin: ".5rem 0 0 0",
      "word-wrap": "break-word",
      minHeight:'40px'
    },
    "&:hover": {
      // color: "#",
      // fontWeight:'bold',
      fill: "#fff",
      background: "#e1e1e1",
      transition: "all .3s ease-in-out",
    },
  },
  cardIcon:{
    minHeight: "60px"
  },
  description: {
    textAlign: "initial",
  },
}));

const Contents = [
  {
    value: 1,
    title: "NaaS",
    image: NaasImage,
    subTitle: "Neo Network as a Service",
    mid: "As a CSP (Communication Service Provider) for Neo Enterprise Private Network, we share our knowledge on frontier technologies to fulfill your special demands. Targeting Hyperscale Enterprise, we have achieved extremely high security and efficiency standards in our networks, leveraging rare resources such as, spectrum, dark fibers and POP sites to offer the best solutions to our customers.",
    keys: [
      {
        value: 1,
        icon: Access,
        title: "Precise Access",
        description:
          "Our goal is to support Enterprises in becoming Connected Enterprises, supporting our customers to embrace new technological trends such as business automation, nomadic work, AIoT, etc.We help Enterprises in re-design their network to achieve a seamless connectivity.",
        file: "",
      },
      {
        value: 2,
        icon: Plane,
        title: "Control Plane",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 3,
        icon: Awareness,
        title: "Awareness Forwarding",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 4,
        icon: CloudBonding,
        title: "Cloud Bonding",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 5,
        icon: CloudSwift,
        title: "Cloud Swift",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 6,
        icon: UnifiedAccess,
        title: "Unified Access",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 7,
        icon: Nexus,
        title: "Nexus Fabric",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 8,
        icon: BorderTransport,
        title: "Border Transport ",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 9,
        icon: NetworkBonding,
        title: "Network Bonding ",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 10,
        icon: NetworkSwift,
        title: "Network Swift   ",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
    ],
  },
  {
    value: 2,
    title: "RaaS",
    image: RaasImage,
    subTitle: "Reality as a Service",
    mid: "Our Reality as a Service represents the final evolution of the digital world, where the strong binding between physical and digital realities allows users to influence one with the other. Through our platform IT is possible to manage any resource, such as property and ambience, human capital, products and goods, machines and vehicles, etc. Our services can serve a variety of needs such as Business applications, Lifestyle services, Health and Safety and so on, making this solution suitable for Enterprises, Governments but also Health organizations or Realestate.",
    keys: [
      {
        value: 1,
        icon: Constitution,
        title: "Constitution",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 2,
        icon: Directory,
        title: "Directory",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 3,
        icon: Geospatial,
        title: "Geospatial",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 4,
        icon: AssociatedBonding,
        title: "Associated Bonding",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 5,
        icon: PublicSwift,
        title: "Public Swift",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
    ],
  },
  {
    value: 3,
    title: "SaaS",
    image: SaasImage,
    subTitle: " Symbiosis as a Service",
    mid: "Symbiosis as a Service refers to all our applications that help Enterprises in improving their business quality, both internally and externally. Internally we will support in network usage, data analysis and human capital management; while externally we will simplify and improve collaboration among the whole supply chain throughout the entire product lifecycle.",
    keys: [
      {
        value: 1,
        icon: ExperienceInsight,
        title: "Experience Insight",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 2,
        icon: DataHarmonic,
        title: "Data Harmonic",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 3,
        icon: IntellegenceSymbiosis,
        title: "Intellegnece Symbiosis",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 4,
        icon: TalentBonding,
        title: "Talent Bonding",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 5,
        icon: TalentSwift,
        title: "Talent Swift",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
    ],
  },
  {
    value: 4,
    title: "MaaS",
    image: MassImage,
    subTitle: " Mediation as a Service",
    mid: "Our Mediation as a service includes all the elements you need to build your Digital Enterprise. We start by offering a variety of Identification systems to bind physical elements with their Digital Twins, furthermore we provide three different kinds of interfaces: UI (for Humans), FI (for physical objects), MI (for Machines). The last step to access the digital reality is our Bifrost, that acts like a bridge between physical and digital space.",
    keys: [
      {
        value: 1,
        icon: Identity,
        title: "Identity",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 2,
        icon: FI,
        title: "Field Interface",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 3,
        icon: MI,
        title: "Machine Interface",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 4,
        icon: UI,
        title: "User Interface",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
      {
        value: 5,
        icon: Bifrost,
        title: "Bifrost",
        description:
          "Each eyepiece is provided with a dummy eyepiece which comes opposite to the eye which is not observing and permits of it being kept open.",
        file: "",
      },
    ],
  },
];

function Products({ history }) {
  const classes = useStyles();
  const [flip, set] = useState(false);
  const [isloading,setIsloading] = useState(true)
  const [value, setValue] = useState(1);
  const [sub, setSub] = useState(Contents[0].keys[0]);
  const { number } = useSpring({
    // reset: true,
    // reverse: flip,
    from: { number: 0 },
    number: 7,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (Contents[newValue - 1]) {
      setSub(Contents[newValue - 1].keys[0]);
    }
  };

  const subChange = (v) => {
    setSub(v);
  };

    React.useEffect(() => {
      setIsloading(true)
    fetch(NaasImage)
      .then(resp => resp.blob())
      .then(blob => {
        let url = URL.createObjectURL(blob);
        let img = new Image();
        // Image loading is an asynchronous operation
        img.onload = e => {
          console.log(img)
          console.log('async', img.naturalWidth, img.complete);
          setIsloading(false)
        }
        img.src = url;
      });
  },[])
  
    React.useEffect(() => {
      setIsloading(true)
    fetch(RaasImage)
      .then(resp => resp.blob())
      .then(blob => {
        let url = URL.createObjectURL(blob);
        let img = new Image();
        // Image loading is an asynchronous operation
        img.onload = e => {
          console.log(img)
          console.log('async', img.naturalWidth, img.complete);
          setIsloading(false)
        }
        img.src = url;
      });
  },[])


  return (
    <div>
      <Loading isloading={isloading}/>
      <div className={classes.container}>
        <div className={classes.left}>
          <TabContext value={value}>
            <TabList
              fullWidth
              onChange={handleChange}
              aria-label="lab API tabs example"
              className={classes.tabs}
            >
              <Tab
                className={classes.tab}
                label={<div className={classes.TabTitle}>NaaS</div>}
                value={1}
              />
              <Tab
                className={classes.tab}
                label={<div className={classes.TabTitle}>MaaS</div>}
                value={4}
              />
              <Tab
                className={classes.tab}
                label={<div className={classes.TabTitle}>SaaS</div>}
                value={3}
              />
              <Tab
                className={classes.tab}
                label={<div className={classes.TabTitle}>RaaS</div>}
                value={2}
              />
            </TabList>
            <div className={classes.bar}></div>
            {Contents.map((c) => (
              <TabPanel value={c.value} style={{ padding: "1rem 0" }}>
                <div className={classes.top}>
                  <div className={classes.title}>
                    <h3>{c.title}</h3>
                    <p>/ {c.subTitle} /</p>
                  </div>
                  <div className={classes.topRight}>
                    <div className={classes.download}>
                      {/* <HiDownload
                      style={{ margin: "0 1rem 0 0", fontSize: "18px" }}
                    /> */}
                      Download {c.title} Full PDF
                    </div>
                  </div>
                </div>
                <div className={classes.mid}>{c.mid}</div>
                <div className={classes.cards}>
                  {c.keys.map((k) => (
                    <div
                      className={sub === k ? classes.seleCard : classes.card}
                      onClick={() => {
                        subChange(k);
                      }}
                    >
                      <div className={classes.cardIcon}><k.icon fill={sub===k ? 'rgba(255,255,255,0.8)' : ''}/></div>
                      <p className={classes.cardTitle}>{k.title}</p>
                    </div>
                  ))}
                </div>
                {/* <Description sub={sub} /> */}
              </TabPanel>
            ))}
          </TabContext>
        </div>
        <div className={classes.right}>
          <img
            className={classes.img}
            alt={Contents[value - 1].title}
            src={Contents[value - 1].image}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Products);

function Description({ sub }) {
  const classes = useStyles();
  return (
    <div className={classes.description}>
      <h2>Description</h2>
      <p>
        Each eyepiece is provided with a dummy eyepiece which comes opposite to
        the eye which is not observing and permits of it being kept open.
      </p>
      <div className={classes.downloadBorderLess}>
        <HiDownload style={{ margin: "0 1rem 0 0", fontSize: "18px" }} />
        Download {sub.title} PDF
      </div>
    </div>
  );
}
