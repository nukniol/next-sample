import "../styles/globals.css";
import Layout from "../components/layout";
import { getCategories } from "../pages/api/categories";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = async () => {
  let pageProps = {};

  try {
    const categories = await getCategories();
    pageProps = { ...pageProps, categories };
  } catch (error) {}

  return { pageProps };
};
