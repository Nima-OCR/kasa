import styled from 'styled-components';
import colors from "../../utils/style/colors";

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 110px;
  overflow: hidden;
  border-radius: 10px;
`;

const HeroText = styled.h1`
  position: absolute;
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: ${colors.light};
  z-index: 1;
  margin: 0 0 0 16px;
`;
const Illustration = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  transform: scale(1.85);
`;



const HeroSection = ({ heroText, imgSrc }) => (
    <HeroContainer>
        <HeroText>{heroText}</HeroText>
        <Illustration src={imgSrc} />
    </HeroContainer>
);

export default HeroSection;

