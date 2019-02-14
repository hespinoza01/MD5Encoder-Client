import React from 'react';
import './BarButton.css';

const BarButton = (props) => {
    return(
        <div className="BarButton">
            <button className="BarButton--btn" onClick={props.onClearClick}>Limpiar texto</button>
            <button className="BarButton--btn primary" onClick={props.onEncodeClick}>Codificar</button>
        </div>
    );
};

export default BarButton;