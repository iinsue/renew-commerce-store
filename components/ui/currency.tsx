"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
});

type Props = {
  value?: string | number;
};

export const CurrencyComponent: React.FC<Props> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted === false) return null;

  return (
    <>
      <div className="font-semibold">{formatter.format(Number(value))}</div>
    </>
  );
};
