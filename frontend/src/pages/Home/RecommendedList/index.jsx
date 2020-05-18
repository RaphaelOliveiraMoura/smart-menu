import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';

import { Container } from './styles';

function RecommendedList({ recommended, loading }) {
  return (
    <Container>
      <h2>Recomendados</h2>
      <ul>
        {loading &&
          React.Children.toArray(
            Array(4)
              .fill(0)
              .map(() => <Shimmer height={95} />)
          )}
        {recommended.map((item) => (
          <li key={String(item.id)}>
            <Link to={`/item/${item.id}`}>
              <article>
                <picture>
                  <img src={item.image_url} alt={item.title} />
                </picture>

                <aside>
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>

                  <footer>
                    <span>{item.formattedOldPrice}</span>
                    <strong>{item.formattedPrice}</strong>
                  </footer>
                </aside>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

RecommendedList.propTypes = {
  loading: PropTypes.bool,
  recommended: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

RecommendedList.defaultProps = {
  loading: false,
  recommended: [],
};

export default RecommendedList;
