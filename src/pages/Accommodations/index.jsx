import Slideshow from '../../components/Slideshow';
import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import {useParams} from "react-router-dom";
import TitleLocation from "../../components/TitleLocation";
import * as PropTypes from "prop-types";
import RatingHost from "../../components/RatingHost";

function TagsList(props) {
    return null;
}

TagsList.propTypes = {tags: PropTypes.any};
const Logement = () => {
    const { idLogement } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const foundLogement = data.find((location) => location.id === idLogement);
        if (foundLogement) {
            setLogement(foundLogement);
        }
    }, [idLogement]);

    if (!logement) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <Slideshow pictures={logement.pictures} />
            <div className="info-container">
                <TitleLocation title={logement.title} location={logement.location} />
                <TagsList tags={logement.tags} />
                <RatingHost rating={logement.rating} host={logement.host} />
            </div>
        </div>
    );
};

export default Logement;
