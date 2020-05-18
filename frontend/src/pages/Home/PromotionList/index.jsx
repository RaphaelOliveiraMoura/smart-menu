import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';

import { Container } from './styles';

function PromotionList({ promotions, loading }) {
  return (
    <Container>
      <h2>Promoções</h2>
      <ul>
        {loading &&
          React.Children.toArray(
            Array(8)
              .fill(0)
              .map(() => <Shimmer width={120} height={150} />)
          )}
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
  loading: PropTypes.bool,
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
  loading: false,
  promotions: [],
};

export default PromotionList;
