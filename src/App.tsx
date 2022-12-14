import React, {useEffect, useState} from 'react';
import './App.scss';
import ScreenComponent from "./components/ScreenComponent/ScreenComponent";
import DigitsComponent from "./components/DigitsComponent/DigitsComponent";

let calculation = "";
let visibleDigits = "";

  function App() {
    const [visibleValue, setVisibleValue] = useState("0");
    const [reset, setReset] = useState(true);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (calculation.length > 0) {
            setReset(false);
        } else {
            setReset(true);
        }
    }, [calculation.length]);
      useEffect(() => {
          if (visibleValue === 'Infinity' || visibleValue === '-Infinity') {
              setVisibleValue('Ойой, так робити не можна');
              setLoading(true);
              setTimeout(() => {
                  setVisibleValue("0");
                  calculation = "";
                  visibleDigits = "";
                  setLoading(false);
              }, 1500)
          }
      }, [visibleValue])

      const handler = (e:  React.MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value;
        const prevValue = calculation[calculation.length - 1];

        if (value === "C") {
            setVisibleValue ("0");
            calculation = "";
            visibleDigits = "";
        }
        if (value === "=") {
            setVisibleValue(eval(calculation) + '');
            calculation = eval(calculation) + '';
            visibleDigits = calculation;

        }
        if (value !== '=' && value !== 'C') {
          calculation += value;

          if (value !== "+" && value !== "-" && value !== "*" && value !== "/") {
            visibleDigits += value;
          }

          if (prevValue === "+" || prevValue === "-" || prevValue === "*" || prevValue === "/") {
            visibleDigits = value;
          }
            setVisibleValue(visibleDigits);
        }
    }

  return (
    <div className="App">
        <ScreenComponent visibleValue={visibleValue}/>
        <DigitsComponent handler={handler} reset={reset} visibleValue={visibleValue} isLoading={isLoading}/>
    </div>
  );
}

export default App;
