import { useState } from "react";

export default function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  function add(amount = 1) {
    setCount(count + amount);
  }

  return {
    count,
    add
  };
}
