import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/header";
import MHeader from './layout/mobileHeader'
import useMediaQuery from '@mui/material/useMediaQuery';
import LandingPage from "./pages/LandingPage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./layout/footer"
import ScrollToTop from "./Component/ScrollToTop";
import { useRef,useState } from "react";

const theme = createTheme({});

function App() {
  const About = useRef(null)
  const Projects = useRef(null)
  const Contact = useRef(null)
  const matches = useMediaQuery('(max-width:600px)');
  const scrollToTop = (a) => {
    document.getElementById(a).scroll(0,0)
  }
  const [scroll,setScroll] = useState()

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
     
        <Router>
          {
            matches?             <MHeader scroll={scroll} setScroll={setScroll} scrollToTop={scrollToTop} aboutRef={About} projectsRef={Projects} contactRef={Contact}/>:
             <Header scroll={scroll} setScroll={setScroll} scrollToTop={scrollToTop} aboutRef={About} projectsRef={Projects} contactRef={Contact}/>
          }
         
          <LandingPage scroll={scroll} setScroll={setScroll} aboutRef={About} projectsRef={Projects} contactRef={Contact}/>
          <Footer />
          <ScrollToTop />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
