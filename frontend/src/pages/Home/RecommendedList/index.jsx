import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import formattCurrency from '~/utils/formattCurrency';

import { Container } from './styles';

function RecommendedList({ recommendations }) {
  const formattedOldPrices = useMemo(
    () =>
      recommendations.map(
        (recommendation) => formattCurrency(recommendation.oldPrice),
        {}
      ),
    [recommendations]
  );

  const formattedPrices = useMemo(
    () =>
      recommendations.map(
        (recommendation) => formattCurrency(recommendation.price),
        {}
      ),
    [recommendations]
  );

  return (
    <Container>
      <h2>Recomendados</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={String(item.id)}>
            <Link to={`/item/${item.id}`}>
              <article>
                <picture>
                  <img src={item.image_url} alt={item.title} />
                </picture>

                <div className="main">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>

                <footer>
                  <span>{formattedOldPrices[index]}</span>
                  <strong>{formattedPrices[index]}</strong>
                </footer>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

RecommendedList.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

RecommendedList.defaultProps = {
  recommendations: [],
};

export default RecommendedList;
