import Image from "next/image";

import IconButton from "@/components/ui/icon-button";
import { CurrencyComponent } from "@/components/ui/currency";
import useCart from "@/hooks/use-carts";
import { Product } from "@/type";

import { X } from "lucide-react";

type Props = {
  data: Product;
};

export const CartItem: React.FC<Props> = ({ data }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex border-b py-6">
      <div className="relative size-24 rounded-md sm:size-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton icon={<X className="size-4" />} onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
          <CurrencyComponent value={data.price} />
        </div>
      </div>
    </li>
  );
};
