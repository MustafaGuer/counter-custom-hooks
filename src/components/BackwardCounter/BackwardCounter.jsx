import useCounter from "../../hooks/use-counter";
import Card from "../UI/Card/Card";

function BackwardCounter() {
  const counter = useCounter("backward");

  return <Card>{counter}</Card>;
}

export default BackwardCounter;
