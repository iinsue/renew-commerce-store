import { create } from "zustand";
import { Product } from "@/type";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";

type CartProps = {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      // 장바구니 상품
      items: [],

      // 장바구니에 상품 넣기
      addItem: (data: Product) => {
        const currentItems = get().items;

        // 장바구니에 있는 상품인지 확인
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast.info("장바구니에 있는 상품입니다.", { id: "cart" });
        }

        // 장바구니에 상품 추가
        set({ items: [...get().items, data] });
        return toast.success("상품이 추가되었습니다.", { id: "cart" });
      },

      // 장바구니 상품 제거
      removeItem: (id: string) => {
        // 상품 제거
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("상품이 제거되었습니다.", { id: "cart" });
      },

      // 장바구니 상품 모두 제거
      removeAll: () => set({ items: [] }),
    }),

    // 로컬 스토리지에 저장
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useCart;
