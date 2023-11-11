import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}
const getData = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const BlogPost = async ({ params }) => {
  const item = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <div className={styles.author}>
            <Image
              src="/exit.jpg"
              alt={item.title}
              width="100"
              height="100"
              className={styles.avatar}
            />
            <span className={styles.username}>{item.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            fill={true}
            alt={item.title}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{item.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
