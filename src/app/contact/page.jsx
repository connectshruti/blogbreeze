"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { useForm, ValidationError } from "@formspree/react";
// export const metadata = {
//   title: "Contact us",
//   description: "Contact us description",
// };
const Contact = () => {
  const [state, handleSubmit] = useForm("xknlewgq");

  if (state.succeeded) {
    alert("Message Sent successfully!");
    document.getElementById("contactForm").reset();
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Get in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/characters.png"
            alt=""
            fill="true"
            className={styles.image}
          />
        </div>
        <form id="contactForm" onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            className={styles.input}
            required
          />
          <textarea
            name="Message"
            className={styles.textArea}
            placeholder="Message"
            cols="30"
            rows="10"
            required
          />
          <button
            type="submit"
            className="p-6  cursor-pointer bg-[#6653c2] border-none rounded-[4px] w-fit text-white font-[500]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
