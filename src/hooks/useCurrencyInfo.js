import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((data) => data.json())
      .then((res) => setInfo(res[currency]));
  }, [currency]);
  return info;
};

export default useCurrencyInfo;
