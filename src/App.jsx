import { useState } from "react";
import { InputArea } from "./components";
import { useCurrencyInfo } from "./hooks";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swapFunction = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertFunction = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="flex-wrap bg-cover bg-no-repeat flex justify-center items-center w-full h-screen"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1176225933/photo/coin-stacks-and-blue-bar-and-line-graphs-on-black-background.webp?b=1&s=170667a&w=0&k=20&c=P-8OO4hwg6FEp3jI1oUlIk55kXGu1lmfcZ1w7PP-VbE=')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertFunction();
            }}
          >
            <div className="w-full mb-1">
              <InputArea
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative h-1 w-full">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 uppercase bg-transparent border border-s-slate-400 border-emerald-400 rounded-full text-cyan-800 font-semibold -translate-y-1/2 px-4 py-2"
                onClick={swapFunction}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-4 mt-2">
              <InputArea
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 text-cyan-500 font-semibold rounded-xl p-4"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
