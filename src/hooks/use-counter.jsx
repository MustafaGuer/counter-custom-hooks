import { useState, useEffect } from "react";

// Custom Hooks needs to start use by naming
// the parameter can be everything (hole fn, boolean, string, etc.)
const useCounter = (direction = 'forward') => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      direction === "forward" && setCounter((prevCounter) => prevCounter + 1);
      direction === "backward" && setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};

export default useCounter;
