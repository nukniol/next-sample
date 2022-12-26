import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import configs from "../common/configs";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [pageNum, setPageNum] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPageNum(data.pageNum);
    setPosts(data.posts);
  }, []);

  return (
    <>
      <Header title="Home" />

      <main className={styles.main}>
        {/* list post */}
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Link href={"/posts/" + post.slug}>
                <img
                  src={post.post_thumbnail.URL}
                  width={100}
                  height={100}
                  alt="aaa"
                />
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* pagination */}
        <ul>
          <li></li>
        </ul>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const numOfPage = 2;
  const res = await fetch(
    configs.API_POSTS_URL + `/?fields=ID,title,post_thumbnail,slug&number=${numOfPage}`
  );
  const json = await res.json();

  if (!json) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const pageNum = Math.ceil(json.found / numOfPage);

  const data = {
    pageNum,
    posts: json.posts,
  };

  return {
    props: { data }, // will be passed to the page component as props
  };
}
