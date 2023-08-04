import React from "react";
import { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import CurrencyRow from "./components/CurrencyRow/CurrencyRow";

const BASE_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => { setCurrencyOptions(data)
      const firstCurrency = data[0].ccy;      
      setFromCurrency(data[0].base_ccy);
        setToCurrency(firstCurrency);
        setExchangeRate(data[0].sale)
        console.log(exchangeRate)
      })
  }, []);

  return (
    <div>
      <CurrencyRow currencyOptions={currencyOptions} />
      <div>
        <BsArrowRepeat />
      </div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </div>
  );
}

export default App;
