import axios from "axios";
import configs from "../../common/configs";

async function getPosts(options = { category: "", numOfPage: 10, page: "" }) {
  var query =
    configs.API_POSTS_URL +
    `/?fields=ID,title,post_thumbnail,slug&number=${options.numOfPage}`;

  if (options.category !== undefined) {
    query += `&category=${options.category}`;
  }

  if (options.page !== undefined) {
    query += `&page=${options.page}`;
  }

  const result = await axios(query);

  if (!result?.data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  var data = result?.data;

  if (options.category !== "") {
    const result = await axios(
      configs.API_CATEGORIES_URL +
        `/slug:${options.category}/?fields=ID,name,slug`
    );
    data = { ...data, ...{ category: result?.data } };
  }

  return data;
}

async function getPost(slug) {
  const result = await axios(
    configs.API_POSTS_URL + `/slug:${slug}?fields=ID,title,content`
  );

  if (!result?.data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return result?.data;
}

module.exports = {
  getPosts,
  getPost,
};
