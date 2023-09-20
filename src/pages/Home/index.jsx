import HeroSection from "../../components/HeroSection";
import CardList from "../../components/Card";
import imgSrc from '../../assets/img.png';
import './_home.scss';

const Home = () => {
    return (
        <main className="homeContainer">
            <HeroSection heroText="Chez vous, partout et ailleurs" imgSrc={imgSrc} />
            <div className="cardContainer">
                <CardList />
            </div>
        </main>
    );
};

export default Home;
