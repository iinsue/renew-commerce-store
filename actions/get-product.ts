import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// 상품 상세 정보
const getProduct = async (id: string) => {
  const response = await fetch(`${URL}/${id}`);

  if (response.ok === false) return null;

  return response.json();
};

export default getProduct;
