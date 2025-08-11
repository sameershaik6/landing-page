import React, { useMemo, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Home from "./pages/Home";
import Services from "./pages/Services";
import Navbar from './components/Navbar';
import "./App.css"
import HeroSection from "./components/HeroSection";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [mode,setMode] = useState("light");

  const theme = useMemo( ()=> 
    createTheme({
      palette:{
        mode,
        primary: { main: "#1976d2" },
      },
    })
    ,[mode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Navbar mode={mode} setMode={setMode}/>
      <HeroSection  />
      {/* <div><Home id="home"/></div> */}
      <div><About /></div>
      <div><Services /></div>
      <div><Contact /></div>
      </ThemeProvider>
    </div>

  );
}

export default App;
