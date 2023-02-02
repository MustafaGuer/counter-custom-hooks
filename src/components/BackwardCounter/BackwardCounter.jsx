import { useState, useEffect } from "react";

import Card from "../UI/Card/Card";

function BackwardCounter() {
  const [counter, setCounter] = useState(0);

  useEffect((prevCounter) => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card>{counter}</Card>;
}

export default BackwardCounter;