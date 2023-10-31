"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "@/context/MyContext.js";
const DarkModeToggle = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);

  return (
    <div className={styles.DarkModeContainer} onClick={toggleTheme}>
      <div className={styles.icon}>&#127769;</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
