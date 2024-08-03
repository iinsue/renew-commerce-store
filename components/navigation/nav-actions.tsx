"use client";

import { useEffect, useState } from "react";

import useCart from "@/hooks/use-carts";
import { Button } from "@/components/ui/button";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export const NavActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted === false) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full"
      >
        <ShoppingBag className="size-5" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
