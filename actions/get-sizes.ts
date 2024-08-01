import { Size } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL);

  if (response.ok === false) return [];

  return response.json();
};

export default getSizes;
