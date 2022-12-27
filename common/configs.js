const HOST_URL =
  `https://public-api.wordpress.com/rest/v1.1/sites/${process.env.WP_URL}`;
const configs = {
  API_POSTS_URL: HOST_URL + "/posts",
  API_CATEGORIES_URL: HOST_URL + "/categories",
};

export default configs;
