import React from 'react';
import './PopupResult.css';

const PopupResult = (props) => {
    function stopPropagation(e){ e.stopPropagation(); }

    return(
        <div className="PopupResult" onClick={props.onClick}>
            <div className="PopupResult--content" onClick={stopPropagation}>
                <button className="btnClose" onClick={props.onClick}>
                    <svg width="15" height="15" viewBox="0 0 1000 1000">
                        <g><path fill="royalblue" d="M630.8,497.3l317.1-330.7c35.4-36.9,34.1-95.5-2.8-130.8c-36.8-35.4-95.4-34.1-130.8,2.8L497.2,369.2L189.3,73.9c-36.8-35.4-95.4-34.1-130.8,2.7l-0.1,0.1c-35.3,36.9-34,95.4,2.8,130.7l308,295.3L52.1,833.4c-35.4,36.9-34.1,95.5,2.8,130.8c36.9,35.4,95.5,34.1,130.8-2.7l317.1-330.7l308,295.2c36.8,35.4,95.3,34.1,130.6-2.6l0.3-0.3c35.2-36.9,33.9-95.3-2.9-130.6L630.8,497.3z"/></g>
                    </svg>
                </button>
                <h3 className="PopupResult--content--title">Resultado</h3>
                <p>{props.result}</p>
            </div>
        </div>
    );
};

export default PopupResult;