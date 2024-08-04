"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { CurrencyComponent } from "@/components/ui/currency";
import useCart from "@/hooks/use-carts";

export const Summary = () => {
  const searchParams = useSearchParams();
  const { items, removeAll } = useCart();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("결제되었습니다.", { id: "payment" });
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("결제에 실패했습니다.", { id: "payment" });
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  console.log(totalPrice);
  console.log(items);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) },
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-5 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">주문 내역</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">주문 총액</div>
          <CurrencyComponent value={totalPrice} />
        </div>
        <Button onClick={onCheckout} className="mt-6 w-full">
          Checkout
        </Button>
      </div>
    </div>
  );
};
