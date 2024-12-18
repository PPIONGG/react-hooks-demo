import { useToggle } from "../hooks/useToggle";

const TogglePage = () => {
  const { value, toggle } = useToggle();

  return (
    <div>
      <h2>Toggle Page</h2>
      <p>Value: {value.toString()}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default TogglePage;
