import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function PromotionList({ promotions }) {
  return (
    <Container>
      <h2>Promoções</h2>
      <ul>
        {promotions.map((item) => (
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
                  <span>{item.formattedOldPrice}</span>
                  <strong>{item.formattedPrice}</strong>
                </footer>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

PromotionList.propTypes = {
  promotions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

PromotionList.defaultProps = {
  promotions: [],
};

export default PromotionList;
