import React, { useId } from "react";

function InputArea({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "inr",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const inputAreaId = useId();
  return (
    <div className={`bg-white p-3 flex rounded-lg text-sm ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={inputAreaId}
          className="text-blue-500 inline-block mb-2"
        >
          {label}
        </label>
        <input
          type="number"
          id={inputAreaId}
          placeholder="Amount"
          className="outline-none w-full py-1.5 bg-transparent"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="to-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputArea;
