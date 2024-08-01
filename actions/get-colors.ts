import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL);

  if (response.ok === false) return [];

  return response.json();
};

export default getColors;
