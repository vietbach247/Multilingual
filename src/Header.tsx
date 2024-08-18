import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeContext";
import styled from "styled-components";

const HeaderContainer = styled.header<{ theme: string }>`
  padding: 20px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <HeaderContainer theme={theme}>
      <h1>{t("header")}</h1>
      <div>
        <label>{t("language")}:</label>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
      </div>
      <div>
        <label>{t("Đổi màu")}:</label>
        <button onClick={toggleTheme}>{t("sáng/tôi")}</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
