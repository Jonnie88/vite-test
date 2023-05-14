import React, { useState, useEffect } from "react";

function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="intro">
      {isVisible ? <h1 className="slide-in-left">Hi👋 I'm Johannes</h1> : null}
      {!isVisible ? (
        <h2 className="slide-in-left"> An aspiring programmer 🤓</h2>
      ) : null}
    </div>
  );
}

export default Intro;
