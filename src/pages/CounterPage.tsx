import { useCounter } from "../hooks/useCounter";

const CounterPage = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter Page</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterPage;
