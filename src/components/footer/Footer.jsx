import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 BlogBreeze. All rights reserved.</div>
      <div className={styles.socialLinks}>
        <div className={`${styles.imgContainerBehance} ${styles.imgContainer}`}>
          <Image
            src="/behance.png"
            fill="true"
            alt="behance account"
            className={styles.icon}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/instagram.png"
            fill="true"
            alt=" instagram account"
            className={styles.icon}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/twitter.png"
            fill="true"
            alt="twitter account"
            className={styles.icon}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/youtube.png"
            fill="true"
            alt="youtube account"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
//Layouts
//Loading Layouts
//error layouts
