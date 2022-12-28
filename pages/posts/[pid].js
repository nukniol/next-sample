import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { getPost } from "../api/posts";

export default function Post({ data }) {
  function createMarkup() {
    return { __html: data.content };
  }

  return (
    <div className="container">
      <Header title={data.title} />
      <main>
        <Navbar />
        <div className="row">
          <div>
            <h3 className="text-center">{data.title}</h3>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.query;
  const data = await getPost(pid);

  return {
    props: { data },
  };
}
