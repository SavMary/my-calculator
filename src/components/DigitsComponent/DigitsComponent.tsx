import React, {useEffect, useState} from 'react';
import "./DigitsComponent.scss";
import classNames from "classnames";

type Props = {
    handler: (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    reset: boolean,
    visibleValue: string,
}
const DigitsComponent: React.FC<Props> = ({handler, reset, visibleValue}) => {
    const [digits, setDigits] = useState<number[]>([]);

    useEffect(() => {
        const createDigitsArray = () => {
            const array: number[] = [];
            for (let i = 0; i < 10; i++) {
                array.push(i);
            }
            setDigits(array);
        }

        createDigitsArray();
    }, []);

    return (
        <div className="digits">
            {digits.map(num => (
                <button
                    value={num}
                    className="digits__item digits__item--number"
                    key={num}
                    onClick={e => handler(e)}
                >
                    <p>{num}</p>
                </button>
            ))}
            <button
                value={'+'}
                className="digits__item"
                disabled={visibleValue === "0"}
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">+</p>
            </button >
            <button
                value={'-'}
                className="digits__item"
                disabled={visibleValue === "0"}
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">-</p>
            </button>
            <button
                value={'*'}
                className="digits__item"
                disabled={visibleValue === "0"}
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">*</p>
            </button>
            <button
                value={'/'}
                className="digits__item"
                disabled={visibleValue === "0"}
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">/</p>
            </button>
            <button
                value={reset ? "AC" : "C"}
                className={classNames("digits__item", {
                    "disabled": reset
                })}
                onClick={e => handler(e)}
                disabled={reset}
            >
              <p className={"digits__item--value"}>{reset ? 'AC' : 'C'}</p>
            </button>
            <button
                value={'='}
                className="digits__item"
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">=</p>
            </button>
        </div>
    );
};

export default DigitsComponent;