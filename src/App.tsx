import React, {useEffect, useState} from 'react';
import './App.scss';
import ScreenComponent from "./components/ScreenComponent/ScreenComponent";
import DigitsComponent from "./components/DigitsComponent/DigitsComponent";

let calculation = "";
let visibleDigits = "";

  function App() {
    const [visibleValue, setVisibleValue] = useState("0");
    const [reset, setReset] = useState(true);

    useEffect(() => {
        if (calculation.length > 0) {
            setReset(false);
        } else {
            setReset(true);
        }
    }, [calculation.length]);
      useEffect(() => {
          if (visibleValue === 'Infinity' || visibleValue === '-Infinity') {
              setVisibleValue('Ойой, так робити не можна')
          }
      }, [visibleValue])

      const handler = (e:  React.MouseEvent<HTMLButtonElement>) => {
        let value = e.currentTarget.value;
        const length = calculation[calculation.length - 1];

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

                if (length === "+" || length === "-" || length === "*" || length === "/") {
                    visibleDigits = value;
                }

                setVisibleValue(visibleDigits);
                }
    }

  return (
    <div className="App">
        <ScreenComponent visibleValue={visibleValue}/>
        <DigitsComponent handler={handler} reset={reset} visibleValue={visibleValue}/>
    </div>
  );
}

export default App;
