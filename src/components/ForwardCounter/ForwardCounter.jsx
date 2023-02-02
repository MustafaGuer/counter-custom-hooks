import useCounter from "../../hooks/use-counter";
import Card from "../UI/Card/Card";

function ForwardCounter() {
  const counter = useCounter('forward');

  return <Card>{counter}</Card>;
}

export default ForwardCounter;
