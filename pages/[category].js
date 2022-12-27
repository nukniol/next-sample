import { useEffect, useState } from "react";
import { getPosts } from "./api/postController";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Card from "../components/card";

export default function Category({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNum, setPageNum] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setCurrentPage(data.currentPage);
    setPageNum(data.pageNum);
    setPosts(data.posts);
  }, [data.posts]);

  const postsRender = posts.map((post, index) => (
    <Card key={index} post={post} />
  ));

  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <Navbar />
        <div className="row text-center">{postsRender}</div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { category } = context.query;
  const data = await getPosts({ category });
  return {
    props: { data },
  };
}
