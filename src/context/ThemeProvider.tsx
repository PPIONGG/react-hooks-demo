// context/ThemeProvider.tsx
import { createContext, useState, ReactNode } from "react";

// สร้าง Context สำหรับ Theme
export const ThemeContext = createContext({
  theme: "light", // ค่าเริ่มต้น
  toggleTheme: () => {
    console.log("Toggle Theme");
    
  }, // ฟังก์ชันสำหรับเปลี่ยน Theme
});

// สร้าง ThemeProvider
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
