import React, { useState } from 'react';
import './_dropdown.scss';

const DropdownComponent = ({ buttonName, text }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="dropdown__container" onClick={toggleVisibility}>
            <div className="dropdown">
                <div className="dropdown__button-container">
                    <button className="dropdown__button-name">{buttonName}</button>
                    <svg
                        className={`dropdown__arrow ${isVisible ? 'is-visible' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="31"
                        viewBox="0 0 33 31"
                        fill="none"
                    >
                        <path
                            d="M11.6931 10.5029C12.1394 10.0566 12.8642 10.0566 13.3104 10.5029L20.1653 17.3578C20.6116 17.8041 20.6116 18.5288 20.1653 18.9751C19.719 19.4214 18.9943 19.4214 18.548 18.9751L12.5 12.9271L6.45203 18.9715C6.00575 19.4178 5.28099 19.4178 4.83471 18.9715C4.38843 18.5252 4.38843 17.8005 4.83471 17.3542L11.6896 10.4994L11.6931 10.5029Z"
                            fill="white"
                        />
                    </svg>
                </div>

                <div className={`dropdown__text-content-frame ${isVisible ? 'is-visible' : ''}`}>
                    <p className="dropdown__text-content">{text}</p>
                </div>

            </div>
        </div>
    );
};

export default DropdownComponent;

