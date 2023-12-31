import './App.css';
import React, { useEffect, useState } from "react";
import StarsCanvas from './Components/canvas/Stars.js';
import Projects from './Pages/Projects/Projects.js';
import CustomCursor from "./CustomCursor";
import Loader from "./Loader/Loader.js";


function App() {

  const [down, setDown] = useState(false);

  const [preLoader, setPreLoader] = useState(true);

  const [isDesktop, setDesktop] = useState(window.innerWidth < 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth < 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 3000);
  }, [preLoader]);


  return (
    <>
      <CustomCursor down={down} />
      {isDesktop ?<Loader msg = "Please View on Desktop" />  
      : 
      preLoader ? <Loader msg = "Loading..." /> :
        <div className="App">
        <div className="starsCanvas">
            <Projects />
            <StarsCanvas />
          </div>
      </div>
      }

      
      
    </>
  );
}

export default App;
