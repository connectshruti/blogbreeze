import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/tutorialsandguides" className={styles.item}>
          <span className={styles.title}>Tutorials and Guides</span>
        </Link>

        <Link href="/portfolio/newsandupdates" className={styles.item}>
          <span className={styles.title}>News and Updates</span>
        </Link>

        <Link href="/portfolio/communityinteraction" className={styles.item}>
          <span className={styles.title}>Community Interaction</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
