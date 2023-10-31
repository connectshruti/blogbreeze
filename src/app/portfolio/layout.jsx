import React from "react";
import styles from "./page.module.css";
export const metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "portfolio",
};
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Blogs</h1>
      {children}
    </div>
  );
};

export default Layout;
