"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/posts`,
      {
        cache: "no-store",
        method: "GET",
      }
    );
    if (!res.ok) {
      return "Error occured";
    }
    const body = await res.json();
    setData(body);
  };

  const postData = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/posts`, {
      method: "POST",
    })
      .then((data) => {
        console.log("data" + data);
      })
      .catch((err) => console.log("err" + err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.maincontainer}>
      {data && (
        <>
          {data.map((item) => {
            return (
              <Link
                href={`/blog/${item._id}`}
                key={item._id}
                className={styles.container}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill={true}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.title}>{item.title}</h1>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Blog;
