import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/header";
import Home from "./pages/home";
import LandingPage from "./pages/LandingPage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./layout/footer"


const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <LandingPage />
          <Footer/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
