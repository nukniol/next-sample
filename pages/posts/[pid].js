import configs from "../../common/configs";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

export default function Post({ data }) {
  function createMarkup() {
    return { __html: data.content };
  }

  return (
    <div className="container">
      <Header title={data.title} />
      <main>
        <Navbar />
        <h3>{data.title}</h3>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.query;
  const res = await fetch(
    configs.API_POSTS_URL + `/slug:${pid}?fields=ID,title,content`
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

  return {
    props: { data: json }, // will be passed to the page component as props
  };
}
