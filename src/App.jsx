import React, { useState, useEffect } from "react";

import Intro from "./components/Intro";
import "./reset.css";
function App() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {isVisible ? <Intro /> : null}
      {!isVisible ? <h1>Hello world</h1> : null}
    </>
  );
}

export default App;
