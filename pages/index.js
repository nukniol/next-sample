import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import configs from "../common/configs";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [pageNum, setPageNum] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPageNum(data.pageNum);
    setPosts(data.posts);
  }, []);

  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <Navbar />
        {/* list post */}
        <div className="row text-center">
          {posts.map((post, index) => (
            <div className="col-6 col-md-4 col-lg-3 px-1" key={index}>
              <Link href={"/posts/" + post.slug}>
                <div className="ratio ratio-4x3">
                  <Image className="img-thumbnail img-cover p-0 border-0"
                    src={post.post_thumbnail.URL}
                    width={100}
                    height={100}
                    alt="aaa"
                  />
                </div>
                <p className="text-truncate px-3">{post.title}</p>
              </Link>
            </div>
          ))}
        </div>
        {/* pagination */}
        {/* <ul>
          <li></li>
        </ul> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const numOfPage = 10;
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
    props: { data },
  };
}
