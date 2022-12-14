import React, {useEffect, useState} from 'react';
import "./DigitsComponent.scss";

type Props = {
    handler: (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    reset: boolean,
}
const DigitsComponent: React.FC<Props> = ({handler, reset}) => {
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
                    className="digits__item" key={num}
                    onClick={e => handler(e)}
                >
                    <p className="digits__item--number">{num}</p>
                </button>
            ))}
            <button
                value={'+'}
                className="digits__item"
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">+</p>
            </button >
            <button
                value={'-'}
                className="digits__item"
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">-</p>
            </button>
            <button
                value={'*'}
                className="digits__item"
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">*</p>
            </button>
            <button
                value={'/'}
                className="digits__item"
                onClick={e => handler(e)}
            >
                <p className="digits__item--value">/</p>
            </button>
            <button
                value={reset ? "AC" : "C"}
                className="digits__item"
                onClick={e => handler(e)}
                disabled={reset}
            >
                {
                    reset
                        ? <p className="digits__item--value">AC</p>
                        : <p className="digits__item--value">C</p>
                }
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