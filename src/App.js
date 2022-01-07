import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/header";
import Home from "./pages/home";
import LandingPage from "./pages/LandingPage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./layout/footer"
import ScrollToTop from "./Component/ScrollToTop";
import { useRef } from "react";

const theme = createTheme({});

function App() {
  const About = useRef(null)
  const scrollToTop = (a) => {
    document.getElementById(a).scroll(0,0)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
     
        <Router>

          <Header scrollToTop={scrollToTop}  aboutRef={About}/>
          <LandingPage aboutRef={About}/>
          <Footer/>
          <ScrollToTop/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
