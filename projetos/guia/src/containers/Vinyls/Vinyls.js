import useCounter from "../../hooks/useCounter";
import Counter from "../../components/Counter";
import Button from "../../components/Button";
import { useTotalContext } from "../../contexts/TotalContext";

export default function Vinyls() {
  const { add: addTotal } = useTotalContext();
  const { count, add } = useCounter();

  function addWithTotal(amount = 1) {
    add(amount);
    addTotal(amount);
  }

  return (
    <div>
      <h3>Vinyls</h3>
      <Counter count={count}>
        <Button onClick={() => addWithTotal()}>+ 1</Button>
        <Button onClick={() => addWithTotal(5)}>+ 5</Button>
      </Counter>
    </div>
  );
}
