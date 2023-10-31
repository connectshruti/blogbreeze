import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import exit from "public/gamingSetup.png";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={exit} fill="true" className={styles.image} />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Educational Content</h1>
          <h2 className={styles.imgDesc}>
            Your premier source for computer science insights, educational
            content, and tech news
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            our mission is to empower individuals with the knowledge and skills
            they need to thrive in the digital age. We believe that technology
            has the power to transform lives and drive innovation. Whether
            you're a seasoned developer or just starting your journey into the
            world of code, we're here to support and guide you every step of the
            way.
            <br />
            <br />
          </p>
          <div className={styles.item}>
            <h1 className={styles.title}> What We Offer?</h1>
            <p className={styles.desc}>
              Educational Content: We provide a wide range of articles,
              tutorials, and guides that cover diverse computer science topics.
              Our content is designed to be informative, practical, and easy to
              understand.
              <br />
              Community: BLOGBREEZE is more than just a website; it's a
              community of like-minded individuals who share a passion for
              technology. We encourage you to join our discussions, ask
              questions, and share your knowledge.
              <br /> News and Updates: Stay informed about the latest
              developments in the tech industry. We provide news, insights, and
              analysis to keep you up-to-date on what's happening in the world
              of computer science.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Your premier source for computer science insights, educational
            content, and tech news. We're here to take you on a journey through
            the ever-evolving world of technology, making it approachable and
            exciting for all.
            <br />
            We value your feedback and suggestions. If you have questions,
            ideas, or just want to say hello, please don't hesitate to reach out
            to us. You can contact us at
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
