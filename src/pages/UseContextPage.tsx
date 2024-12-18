import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseContextPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>useContext Example</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default UseContextPage;
