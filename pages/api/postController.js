const { default: configs } = require("../../common/configs");

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

  const res = await fetch(query);
  const json = await res.json();

  if (!json) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const pageNum = Math.ceil(json.found / options.numOfPage);

  const data = {
    pageNum,
    posts: json.posts,
  };

  return data;
}

module.exports = {
  getPosts,
};
