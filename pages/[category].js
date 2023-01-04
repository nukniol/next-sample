import { useEffect, useState } from "react";
import { getPosts } from "./api/posts";
import Card from "../components/card";

export default function Category({ data }) {
  const [category, setCategory] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setCategory(data.category);
    setPosts(data.posts);
  }, [data]);

  const postsRender = posts.map((post, index) => (
    <Card key={index} post={post} />
  ));

  return <div className="row text-center">{postsRender}</div>;
}

export async function getServerSideProps(context) {
  const { category } = context.query;
  const data = await getPosts({ category });
  return {
    props: { data, title: data.category.name },
  };
}
