import { useState } from "react";



export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment +1</button>
        <b>Result: {count}</b>
        <button onClick={() => setCount(count - 1)}>Decrement -1</button>
      </div>
    </div>
  )
}