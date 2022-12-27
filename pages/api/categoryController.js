const { default: configs } = require("../../common/configs");

const getCategories = async () => {
  var query = configs.API_CATEGORIES_URL + `/?fields=ID,name,slug`;

  const res = await fetch(query);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return data;
};

const getCategory = async (slug) => {
  var query = configs.API_CATEGORIES_URL + `/slug:${slug}`;

  const res = await fetch(query);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return data;
};

module.exports = {
  getCategories,
  getCategory,
};
