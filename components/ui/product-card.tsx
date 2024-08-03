"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import { Product } from "@/type";
import IconButton from "./icon-button";
import { CurrencyComponent } from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-carts";

import { Expand, ShoppingCart } from "lucide-react";

type Props = {
  data: Product;
};

export const ProductCard: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  // 상품 상세 페이지 이동
  const onClick = () => {
    router.push(`/product/${data?.id}`);
  };

  // 확대 버튼 클릭
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  // 장바구니에 상품 추가
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <>
      <div
        className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
        onClick={onClick}
      >
        {/* Images and Actions */}
        <div className="relative aspect-square rounded-xl bg-gray-100">
          <Image
            src={data?.images?.[0]?.url}
            alt="product-image"
            fill
            className="aspect-square rounded-md object-cover"
          />
          <div className="absolute bottom-5 w-full justify-center px-6 opacity-0 transition group-hover:opacity-100">
            <div className="flex justify-center gap-x-6">
              <IconButton
                onClick={onPreview}
                icon={<Expand className="size-5 text-gray-600" />}
              />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart className="size-5 text-gray-600" />}
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <div>
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <CurrencyComponent value={data?.price} />
        </div>
      </div>
    </>
  );
};
