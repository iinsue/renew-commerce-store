"use client";

import { Product } from "@/type";
import { CurrencyComponent } from "@/components/ui/currency";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-carts";

type Props = {
  data: Product;
};

export const ProductInfo: React.FC<Props> = ({ data }) => {
  const cart = useCart();

  // 장바구니에 상품 추가
  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <CurrencyComponent value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">사이즈 :</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">색상 :</h3>
          <div
            className="size-6 rounded-full border border-gray-600"
            style={{
              backgroundColor: data?.color?.value,
            }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
