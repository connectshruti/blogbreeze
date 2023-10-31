import React from "react";
import styles from "./page.module.css";
import manwithcoffee from "public/manwithcoffee.png";
import Image from "next/image";
import Button from "@/components/button/Button";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Stay in the loop with the latest news, trends, and breakthroughs in
          the tech industry.
        </h1>
        <p className={styles.desc}>
          Dive into our collection of well-researched articles that cover a wide
          range of computer science topics, from programming languages to
          artificial intelligence and everything in between.
        </p>
        <Button url="/" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={manwithcoffee} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default Home;
