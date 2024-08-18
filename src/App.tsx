import React from "react";
import { ThemeProvider } from "./ThemeContext";
import "./i18n";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

export default App;
