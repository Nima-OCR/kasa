import Slideshow from '../../components/Slideshow';
import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import {useNavigate, useParams} from "react-router-dom";
import TitleLocation from "../../components/TitleLocation";
import * as PropTypes from "prop-types";
import RatingHost from "../../components/RatingHost";
import TagsList from "../../components/Tags";
import DropdownComponent from "../../components/Dropdown";



TagsList.propTypes = {tags: PropTypes.any};

const Logement = () => {
    const { idLogement } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const foundLogement = data.find((location) => location.id === idLogement);
        if (foundLogement) {
            setLogement(foundLogement);
        } else {
            navigate('/Page404');
        }
    }, [idLogement, navigate]);

    if (!logement) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="accommodations">
            <Slideshow pictures={logement.pictures} />
            <div className="info-container">
                <TitleLocation title={logement.title} location={logement.location} />
                <TagsList tags={logement.tags} />
                <RatingHost rating={logement.rating} host={logement.host} />

                <div className= "dropdown__details">
                    <DropdownComponent buttonName="Équipements" listItems={logement.equipments} />

                    <DropdownComponent buttonName="Description" text={logement.description} />
                </div>

            </div>
        </div>
    );
};

export default Logement;
