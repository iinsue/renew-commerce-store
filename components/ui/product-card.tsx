"use client";

import { Product } from "@/type";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { CurrencyComponent } from "@/components/ui/currency";

type Props = {
  data: Product;
};

export const ProductCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3">
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
                onClick={() => {}}
                icon={<Expand className="size-5 text-gray-600" />}
              />
              <IconButton
                onClick={() => {}}
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
