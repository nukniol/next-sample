import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/layout";
import { getCategories } from "../pages/api/categories";
import axios from "axios";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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
    pageProps["categories"] = categories;
  } catch (error) {}

  return { pageProps };
};
