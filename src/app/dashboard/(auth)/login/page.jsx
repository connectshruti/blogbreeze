"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const session = useSession();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }
  if (session.status === "unauthenticated") {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <Link href="/dashboard/register">Signup</Link>
        <button
          onClick={() => signIn("google")}
          className={styles.googleButton}
        >
          Login With Google
        </button>
      </div>
    );
  }
};

export default Login;
