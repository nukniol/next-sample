import axios from "axios";
import configs from "../../common/configs";

async function getCategories() {
  const result = await axios(
    configs.API_CATEGORIES_URL + `/?fields=ID,name,slug`
  );
  return result.data.categories;
}

module.exports = {
  getCategories,
};
