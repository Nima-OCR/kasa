import React from 'react';
import HeroSection from "../../components/HeroSection";
import imgSrc from '../../assets/about.png';
import styled from "styled-components";
import DropdownComponent from "../../components/Dropdown";

const AboutContainer = styled.main`
  width: 89.33%;
  display: inline-flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  gap: 27px;
`


const About = ({ label, options = [], defaultValue, onChange, disabled = false }) => {
    return (
        <AboutContainer>
            <HeroSection heroText="A propos de nous" imgSrc={imgSrc} />

            <DropdownComponent
                buttonName="Fiabilité"
                text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />

            <DropdownComponent
                buttonName="Respect"
                text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />

            <DropdownComponent
                buttonName="Service"
                text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />

            <DropdownComponent
                buttonName="Sécurité"
                text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />


        </AboutContainer>
    );
};

export default About;
