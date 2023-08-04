import React from "react";

export default function CurrencyRow(props) {
const {
  currencyOptions
}=props=-`7\][irewq
  
  :NHFDZconsole.log(props)
  
  return (
    <div>
      <input type="number" />

      <select >
      {currencyOptions.map((option) => {
          return (
            <option key={option.ccy} value={option.ccy}>
              {option.ccy}
            </option>
          );
        })}
      </select>
    </div>
  );
}
