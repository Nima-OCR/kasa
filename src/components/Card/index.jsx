
import React from 'react';
import styled from 'styled-components';
import jsonData from '../../data/data.json';
import colors from "../../utils/style/colors";

const CardContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 20px;
`;

const CardImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;




const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  border-radius: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
  
  p {
    position: absolute;
    bottom: 15px;
    left: 20px;
    color: ${colors.light};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
    margin: 0;
  }
`;

function CardList() {
    const filteredData = jsonData.map(item => ({
        cover: item.cover,
        title: item.title,
    }));

    return (
        <CardContainer>
            {filteredData.map((logement, index) => (
                <Card key={index}>
                    <CardImage src={logement.cover} alt={logement.title} />
                    <p>{logement.title}</p>
                </Card>
            ))}
        </CardContainer>
    );
}

export default CardList;
