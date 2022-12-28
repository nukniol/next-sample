// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import configs from "../../common/configs";

export default async function handler(req, res) {
  const result = await axios(
    configs.API_CATEGORIES_URL + `/?fields=ID,name,slug`
  );
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json(result.data);
}
