"use client";

import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/type";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Filter } from "./filter";

type Props = {
  sizes: Size[];
  colors: Color[];
};

export const MobileFilters: React.FC<Props> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        <Plus className="size-5" />
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close Button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X className="size-4" />} onClick={onClose} />
            </div>
            {/* Render the filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
