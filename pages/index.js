import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { getPosts } from "./api/posts";
import Card from "../components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data.posts);
  }, [data]);

  const postsRender = posts.map((post, index) => (
    <Card key={index} post={post} />
  ));

  return <div className="row text-center">{postsRender}</div>;
}

export async function getServerSideProps(context) {
  const { page } = context.query;
  const data = await getPosts();
  return {
    props: { data, title: "Home Page" },
  };
}
