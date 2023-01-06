import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  function add(amount = 1) {
    setCount(count + amount);
  }

  return {
    count,
    add
  };
}
