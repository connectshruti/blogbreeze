"use client";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.data?.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, { method: "DELETE" });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading && "Loading..."}
          {data?.map((item) => {
            return (
              <div className={styles.post} key={item._id}>
                {" "}
                <div className={styles.imgContainer}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={150}
                    className={styles.img}
                  />
                </div>
                <h2 className={styles.postTitle}>{item.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(item._id)}
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <div className={styles.h1}>Add New Post</div>
          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            cols="30"
            rows="10"
            className={styles.textarea}
          />
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
