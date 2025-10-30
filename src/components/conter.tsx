import { useState } from "react";
import { Button } from "./button";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <p>{count}</p>
      <Button onClick={handleCount}>Add</Button>
    </>
  );
}
