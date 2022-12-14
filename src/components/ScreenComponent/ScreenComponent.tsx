import React, {useEffect} from 'react';
import './ScreenComponent.scss';

type Props = {
    visibleValue: string,
}
const ScreenComponent: React.FC<Props> = ({visibleValue}) => {
    return (
        <div className="screen">
            <p className="screen__value">{visibleValue}</p>
        </div>
    );
};

export default ScreenComponent;