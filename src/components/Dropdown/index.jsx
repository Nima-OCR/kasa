import React, { useState } from 'react';
import styled from 'styled-components';
import colors from "../../utils/style/colors";

const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



const Dropdown = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-direction: column;
  align-items: flex-start;


`

const DropdownButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;

  border-radius: 5px;
  background: var(--Red, #FF6060);

`
const DropdownButtonName = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  align-self: stretch;
  background: var(--Red, #FF6060);
  border: none;
  outline: none;
  color: #FFF;
  font-family: Montserrat,sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px 0 10px 10px;

`

const TextContentFrame = styled.div`
  display: ${props => (props.$isVisible ? 'block' : 'none')};
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  text-align: justify;
  background: var(--Gray, #F6F6F6);
  z-index: 99999;
`

const TextContent = styled.p`
  color: ${colors.primary};
  font-family: Montserrat,sans-serif;
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.6%;
`

const Arrow = styled.svg`
  transform: ${props => (props.$isVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

const DropdownComponent = ({ buttonName, text }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <DropdownContainer onClick={toggleVisibility}>
            <Dropdown>
            <DropdownButtonContainer>
                <DropdownButtonName>{buttonName}</DropdownButtonName>
                <Arrow
                    $isVisible={isVisible}
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
                </Arrow>
            </DropdownButtonContainer>

                <TextContentFrame $isVisible={isVisible}>
                    <TextContent>{text}</TextContent>
                </TextContentFrame>

            </Dropdown>
        </DropdownContainer>
    );
};

export default DropdownComponent;
