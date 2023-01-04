import Card from "./card";

export default function Sidebar({ posts }) {
  const postsRender = posts.posts.map((post, index) => (
    <Card key={index} post={post} type="list" />
  ));
  return (
    <div className="col-md-4">
      <h2>Top trending</h2>
      <ul>{postsRender}</ul>
    </div>
  );
}
