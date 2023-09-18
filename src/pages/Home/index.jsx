import styled from "styled-components";
import HeroSection from "../../components/HeroSection";
import CardList from "../../components/Card";
import imgSrc from '../../assets/img.png';



const HomerContainer = styled.main`
  width: 89.33%;
  display: inline-flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  gap: 27px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`




const Home = () => {
    return (
        <HomerContainer>
            <HeroSection heroText="Chez vous, partout et ailleurs" imgSrc={imgSrc} />
            <CardContainer>
                <CardList></CardList>
            </CardContainer>
        </HomerContainer>
    );
}

export default Home;

