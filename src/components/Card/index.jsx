
import React from 'react';
import jsonData from '../../data/data.json';
import { Link } from 'react-router-dom';
import '../../sass/main.scss';

const CardList = () => {
    const filteredData = jsonData.map(item => ({
        id: item.id,
        cover: item.cover,
        title: item.title,
    }));

    return (
        <div className="CardContainer">
            {filteredData.map((logement, index) => (
                <div key={index} className="Card">
                    <Link to={`/logement/${logement.id}`}>
                        <img src={logement.cover} alt={logement.title} className="CardImage" />
                        <p>{logement.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CardList;
