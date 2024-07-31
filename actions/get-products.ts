import queryString from "query-string";

import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);

  // status가 200~299 사이의 성공응답이 아닌 경우 빈 배열 반환
  if (!response.ok) return [];

  // 성공응답인 경우 json 데이터 반환
  const json = await response.json();

  return json;
};

export default getProducts;
