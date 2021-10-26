import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import color, { style } from "../styles/js/style";
import { withRouter } from "react-router";
import Image from "../img/home.png";
import Video from "../img/Solution.mp4";
import FiveG from "../img/SVG/5G";
import EVA from "../img/SVG/EVA";
import DigitalScoiety from "../img/SVG/DigitalSocietyMetaverse";
import PropertyDigitalOperation from "../img/SVG/PropertyDigitalOperation";
import CloudNativeEnterprise from "../img/SVG/CloudNativeEnterprise";
import DigitalCommerce from "../img/SVG/DigitalCommerce";
import EnterprisePrivateMedia from "../img/SVG/EnterprisePrivateMedia";
import EnterprisePrivateTransport from "../img/SVG/EnterprisePrivateTransport";
import EnterpriseCloudConsolidation from "../img/SVG/EnterpriseCloudConsolidation";
import Journey from "../img/SVG/Solutions/Journey";
import Improve from "../img/SVG/Solutions/Improve";
import Flexible from "../img/SVG/Solutions/Flexible";
import Centralized from "../img/SVG/Solutions/Centralized";
import Contactless from "../img/SVG/Solutions/Contactless";
import Business from "../img/SVG/Solutions/Business";
import CloudNative from "../img/SVG/Solutions/CloudNative";
import BusinessLogic from "../img/SVG/Solutions/BusinessLogic";
import RunTime from "../img/SVG/Solutions/RunTime";
import RealTime from "../img/SVG/Solutions/RealTime";
import Enriched from "../img/SVG/Solutions/Enriched";
import New from "../img/SVG/Solutions/New";
import Empowered from "../img/SVG/Solutions/Empowered";
import Managed from "../img/SVG/Solutions/Managed";
import Targeted from "../img/SVG/Solutions/Targeted";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Img1 from "../img/Solutions/Enterprise Cloud Consolidation.png";
import Img2 from "../img/Solutions/Enterprise Private Transport.png";
import Img3 from "../img/Solutions/Enterprise Private 5G.png";
import Img4 from "../img/Solutions/Digital Commerce.png";
import Img5 from "../img/Solutions/Enriched Virtual Attendant (EVA).png";
import Img6 from "../img/Solutions/Cloud Native Enterprise.png";
import Img7 from "../img/Solutions/Property Digital Operation.png";
import Img8 from "../img/Solutions/Enterprise Private Media.png";
import MapImage from "../img/image2.png";
import { useSpring, animated, config } from "@react-spring/web";

import SSF from "../img/SVG/Solutions/SociallySustainableFuture";
import Productivity from "../img/SVG/Solutions/Productivity";
import EconomicGrowth from "../img/SVG/Solutions/EconomicGrowth";
import Secure from "../img/SVG/Solutions/Secure";
import Scalability from "../img/SVG/Solutions/Scalability.jsx";
import Collaboration from "../img/SVG/Solutions/Collaboration";
import Connectivity from "../img/SVG/Solutions/Connectivity";
import Deployment from "../img/SVG/Solutions/Deployment";
import FlexNetwork from "../img/SVG/Solutions/FlexNetwork";

// contents
const Contents = [
  {
    value: '1',
    icon: EnterpriseCloudConsolidation,
    title: "Enterprise cloud consolidation",
    img: Img1,
    feature: [
      "Traditional networking is dominated by knowledge silos for IT, CT and OT, but the fast spreading of new technologies and habits, such as nomadic work, network slicing, cloud platforms, etc. brought the need of consolidation.",
      "CSP-driven management provides a proven solution for resources optimization along the whole service supply chain. Enterprise Cloud Consolidation will ultimately allow to obtain a faster and more flexible network, able to speed up any kind of migration or system’s scaling.",
    ],
    benifits: [
      {
        icon: <SSF color={color.primary} />,
        title: "Socially Sustainable Future",
        content:
          "Improving the way societies and governments provide education, healthcare, and services to citizens. ",
      },
      {
        icon: <Productivity color={color.primary} />,
        title: "Enhance Productivity",
        content:
          "Technologies make it easier for people to interact, make workers more productive and create additional benefits.  ",
      },
      {
        icon: <EconomicGrowth color={color.primary} />,
        title: "Enables economic growth",
        content:
          "By broadening the reach of technologies such as high-speed Internet, mobile broadband, and computing.",
      },
    ],
  },
  {
    value:'2',
    icon: EnterprisePrivateTransport,
    title: "Enterprise private transport",
    subTitle: "with photonics communications",
    img: Img2,
    feature: [
      "Enterprise Private Transport can be divided in three major categories: Lambda, Optical and over IP.The most important components to consider are: Access, Cloud Consolidation and Client-Server Consolidation.",
      "The combination of these elements can provide a fast and secure network, that can accommodate the needs of any kind of enterprise. ",
    ],
    benifits: [
      {
        icon: <Secure color={color.primary} />,
        title: "Fast and Secure",
        content:
          "Access to dark fibers will increase network speed and allow a seamless experience, maintaining high security standards.",
      },
      {
        icon: <Scalability color={color.primary} />,
        title: "Easy Scalability",
        content:
          "Thanks to network virtualization and virtual network functions simplify the scalability process meeting the flexibility requirements of modern society.",
      },
      {
        icon: <Collaboration color={color.primary} />,
        title: "Facilitate Collaboration",
        content:
          "All the previous factor make collaboration between colleagues and supply chain very easy and efficient.",
      },
    ],
  },
  {
    value: '3',
    icon: FiveG,
    title: "Enterprise private 5G",
    subTitle: "with 5G/6G communications",
    img: Img3,
    feature: [
      "Thanks to new network enablement, such as network slicing, cloud and edge computing will be possible roaming seamlessly from fixed to mobile networks allowing, not only connectivity for any kind of device, such as IoT, Machines, UAV and Vehicles, but also allow a fast and precise location-based application deployment.",
    ],
    benifits: [
      {
        icon: <Connectivity color={color.primary} />,
        title: "Seamless Connectivity",
        content:
          "Seamless roaming from private to public network, enabled by network virtualization and slicing, will allow enterprise to enhance all digital operations.",
      },
      {
        icon: <Deployment color={color.primary} />,
        title: "Precise Application Deployment",
        content:
          "Allow users to access any application needed. Moreover, thanks to fast connectivity and edge computing, experience and performances are maximized.",
      },
      {
        icon: <FlexNetwork color={color.primary} />,
        title: "Flexible network",
        content:
          "Private 5G will allow to easily scale up or down the network and its functions based on specific needs, optimizing resources usage and traffic experience.",
      },
    ],
  },
  {
    value: '8',
    icon: EnterprisePrivateMedia,
    title: "Enterprise private media",
    img: Img8,
    feature: [
      "Not only a portal to access and share rich media but, most importantly, a simple way to deliver corporate intentions to the whole supply chain and potential customers. All content can be easily managed, edited and distributed from a single platform where, employees can benefit from smart human capital development, while partners can access specific content and services.",
    ],
    benifits: [
      {
        icon: <Empowered color={color.primary} />,
        title: "Empowered Media Content",
        content:
          "Enterprises can push all their media through a single platform, improving training experience, brand awareness and distributing knowledge",
      },
      {
        icon: <Managed color={color.primary} />,
        title: "Managed Access",
        content:
          "Based on needs and requirements, will be possible to share specific content with any employee, partner, and with current or potential customers.",
      },
      {
        icon: <Targeted color={color.primary} />,
        title: "Targeted Media",
        content:
          "Once users login, they can have access to the most relevant media based on their needs.",
      },
    ],
  },

  {
    value: '7',
    icon: PropertyDigitalOperation,
    title: "Property digital operation",
    img: Img7,
    feature: [
      " A cloud-based platform to manage and interact with the property through sensors and AIoT devices. For facility owners and management agencies we offer OAM+G (i.e., maintenance, facility management and surveillance), and people/vehicles/goods management (i.e., access control and logistic overview). Tenants and guests can benifit of enriched Digital Services that include the ability to control the surrounding spaces through their phones (Ambience Management) and access lifestyle services (i.e., Transportation, Food Delivery, Digital Commerce, Nomadic Work, etc.).",
    ],
    benifits: [
      {
        icon: <RealTime color={color.primary} />,
        title: "Real-Time Property Status",
        content:
          "Enable risk preventions and allows for a prompt response in case of emergency.",
      },
      {
        icon: <Enriched color={color.primary} />,
        title: "Enriched Digital Services",
        content:
          "Tenants and employees have access to additional digital services that contribute to a better experience, increasing property’s value.",
      },
      {
        icon: <New color={color.primary} />,
        title: "New Bizstyle",
        content:
          "Enterprises can deploy their applications through a local edge, improving employees experience and facilitating nomadic work.",
      },
    ],
  },
  {
    value: '6',
    icon: CloudNativeEnterprise,
    title: " Cloud native enterprise",
    img: Img6,
    feature: [
      "Cloud native means enterprise applications that are born as cloud based. Such applications are vital for the evolution of Enterprises because only API-based applications will allow to be part of the Digital Society. Another important factor is customer expectations, that look for continuous upgrade in UI and Functions.Due to these reasons Enterprise’s applications should be decoupled into multiple application components, that can be then updated separately without influencing any other component. On the other hand, for Digital Enterprises is not feasible to build a pure on-premise cloud, that’s why they should leverage cloud service providers to isolate the application development. Our Cloud Native Enterprise solution includes four major services:",
      <div><a>Cloud Native UX/UI:</a> Support Enterprise to redefine and redesign their front-end which can be located in any tier of system, such as edge, private cloud or public cloud.</div>,
      <div><a>Business Logic:</a> Take care of design or migration of customers’ existing back-end services.</div>,
      <div><a>Run-Time Middleware:</a> Building the Cloud Native Framework.</div>,
      <div><a>Data-Tier:</a> Change the way customers manage their data and leverage neo-technologies such as blockchain, NoSQL and big data.</div>,
    ],

    benifits: [
      {
        icon: <CloudNative color={color.primary} />,
        title: "Fast Release:",
        content:
          "Cloud Native applications support DevOps, which allows to transform software delivery pipeline using automation for faster release.",
      },
      {
        icon: <BusinessLogic color={color.primary} />,
        title: "Easy to Manage",
        content:
          "Using serverless platforms will relieve from time consuming operations and make management much simpler.",
      },
      {
        icon: <Scalability color={color.primary} />,
        title: "Scalability",
        content:
          "The main feature of cloud-native applications is auto-scalability that enables to fit any need.",
      },
    ],
  },

  {
    value:'4',
    icon: DigitalCommerce,
    title: "Digital Commerce",
    img: Img4,
    feature: [
      "Enterprises can precisely share their intentions, through targeted marketing and mixed reality content, having a clear overview of product journey and customer experience, allowing to identify new business opportunities and nimbly adapt to market requirements and consumer needs. On the other hand, consumers receive the best purchasing experience thanks to interactive product information, Authenticity’s Guarantee and precise product journey.",
    ],
    benifits: [
      {
        icon: <Journey color={color.primary} />,
        title: "Journey at-a-Glance",
        content:
          "Collecting data on each step of the product-life-cycle allows enterprise to have a live overview of any aspect of their business,from product production and distribution to CEM and Financial.",
      },
      {
        icon: <Improve color={color.primary} />,
        title: "Improved Business Agility",
        content:
          "All this information enables businesses to take faster decision and provide an incredible competitive advantage.",
      },
      {
        icon: <Flexible color={color.primary} />,
        title: "Top Customer Experience",
        content:
          "Consumer have access to enriched product details, tips based on their preferences and have a transparent overview of each product, enabling to make more informed purchase decisions.",
      },
    ],
  },
  {
    value: '5',
    icon: EVA,
    title: "Enriched Virtual Attendant(EVA)",
    img: Img5,
    feature: [
      "An AI based assistant that understands users’ needs and offers relevant solutions. Enterprises can benefit of virtual greetings and guidance for their customers and offer a unified communication center that includes: Enterprise Instant Messages, Call and Video Call, Conferencing, File Delivery and Workspace Sharing.",
    ],
    benifits: [
      {
        icon: <Centralized color={color.primary} />,
        title: "Centralized Solution",
        content:
          "EVA can manage any type of communications needed by an Enterprise. Advanced cross-platform APIs and Cloud-Based platform will allow user to benefit of the system without any additional installation or registration.",
      },
      {
        icon: <Contactless color={color.primary} />,
        title: "Contactless Communication",
        content:
          "Eliminate need of contact lists, allowing a dynamic contacts display, improving efficiency and retaining an unprecedent level of privacy.",
      },
      {
        icon: <Business color={color.primary} />,
        title: "For Business & Entertainment",
        content:
          "EVA can manage all formal and informal communications, allows contact matching based on requirements and offers entertainment services.",
      },
    ],
  },
];

//css
export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
  },
  video: {
    objectFit: "cover",
    // maxHeight:'400px',
    minHeight: "600px",
    minWidth: "100px",
    maxWidth: "100%",
    position: "absolute",
    // float: "left",
    top: "-50px",
    left: 0,
    // position: "absolute",
    zIndex: -1,
  },
  top: {
    background: "#000",
    top: "-200px",
    height: "600px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.0)",
  },
  topTitle: {
    position: "absolute",
    zIndex: 2,
    fontSize: 60,
    // top: 250,
    bottom: 150,
    left: 200,
  },
  topSub: {
    position: "absolute",
    zIndex: 2,
    fontSize: 18,
    bottom: 100,
    left: 200,
  },
  secArea: {
    margin:'-200px 0 0 0',
    fontSize: 18,
    color: "#000",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    // padding: "0 160px",
    justifyContent: "space-between",
    //   backgroundColor:"#DFDFDF"
  },
  TabTitle: {
    textTransform: "capitalize",
    fontSize: "14px",
    minHeight: "30px",
    minWidth: "190px",
    // marginTop:'10px'
  },
  tab: {
    width: "12%",
    // minWidth: "190px",
  },
  tabs: {
    position: "relative",
    width: "100%",
    display: "flex",
    // maxWidth:'900px',
    justifyContent: "space-between",
    // borderBottom:'1px solid',
    // borderColor:color.greyLight
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
  solutions: {
    width: "100%",
  },
  solution: {
    margin: "auto",
    marginTop: "100px",
    width: "70%",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "3rem 0",
    // minWidth: "0px"
  },
  feature: {
    display: "flex",
    margin: "80px 0",
    // height:'200px',
    width: "100%",
    textAlign: "initial",
  },
  img: {
    width: "100%",
  },
  fea: {
    width: "20%",
    fontSize: "32px",
    // margin:"2rem 0"
    // fontWeight:'bold',
  },
  featureContent: {
    width: "80%",
    lineHeight: "32px",
    "& p": {
      margin: "0 0 1rem 0",
      "& a":{
        fontWeight:"bold"
      }
    },
  },
  benifits: {
    textAlign: "initial",
  },
  benifitsTop: {
    display: "flex",
    fontSize: "32px",
    width: "100%",
  },
  beni: {
    width: "20%",
  },
  bar: {
    width: "80%",
    height: "1px",
    backgroundColor: color.primary,
    margin: "18px",
  },
  beniCards: {
    width: "100%",
    // padding:'50px',
    margin: "100px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  beniCard: {
    width: "25%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  cardIcon: {
    height: "90px",
  },
  cardTitle: {
    color: color.primary,
    fontWeight: "bold",
    margin: "2rem 0",
    fontSize: 24,
  },
  cardContent: {
    fontSize: 14,
  },
}));

// main react function
function Solutions({ history }) {
  const classes = useStyles();
  const [flip, set] = useState(false);
  const [flip1, set1] = useState(false);
  const [value, setValue] = useState('1');

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
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.top}>
          <video className={classes.video} autoPlay loop muted preload="auto">
            <source src={Video} type="video/mp4" />
          </video>
          <div className={classes.topTitle}>Solutions</div>
          <div className={classes.topSub}>
            Learn how different industries can benefit of our cutting-edge
            solutions.
          </div>
        </div>
        <div className={classes.secArea}>
          <TabContext value={value} >
            <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper' ,  }}>
              <Tabs
                value={value}
                // centered
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                onChange={handleChange}
                aria-label="lab API tabs example"
                className={classes.tabs}
              >
                {Contents.map((c) => (
                  <Tab
                    key={c.title}
                    // wrapped
                    icon={
                      <c.icon
                        style={{margin:'1rem 0'}}
                        color={c.value === value ? color.primary : color.grey}
                      />
                    }
                    // className={c lasses.tab}
                    label={
                      <div className={classes.TabTitle}>
                        {c.title}
                        <br />
                        {c.subTitle ? c.subTitle : '   '}
                      </div>
                    }
                    value={c.value}
                  />
                ))}
              </Tabs>
            </Box>
            <div className={classes.solutions}>
              {Contents.map((c) => (
                <TabPanel value={c.value} key={c.title+"88"}>
                  <div className={classes.solution}>
                    {/* <div className={classes.title}>
                      {c.title} {c.subTitle}
                    </div> */}

                    <div className={classes.feature}>
                      <div className={classes.fea}>Feature</div>
                      <div className={classes.featureContent}>
                        {c.feature.map((f) => (
                          <p>{f}</p>
                        ))}
                      </div>
                    </div>
                    {/* <div className={classes.img}> */}
                    <img src={c.img} alt="w" className={classes.img} />
                    {/* </div> */}
                    <div className={classes.benifits}>
                      <div className={classes.benifitsTop}>
                        {/* <div className={classes.beni}>Benifits</div> */}
                        {/* <div className={classes.bar}></div> */}

                        <div className={classes.beniCards}>
                          {c.benifits.map((b) => (
                            <div className={classes.beniCard} key={c.title+"54"}>
                              <div className={classes.cardIcon}>{b.icon}</div>
                              <div className={classes.cardTitle}>{b.title}</div>
                              <div className={classes.cardContent}>
                                {b.content}{" "}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </div>
          </TabContext>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Solutions);
