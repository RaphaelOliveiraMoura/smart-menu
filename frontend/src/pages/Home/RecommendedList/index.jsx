import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function RecommendedList({ recommended }) {
  return (
    <Container>
      <h2>Recomendados</h2>
      <ul>
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
  recommended: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

RecommendedList.defaultProps = {
  recommended: [],
};

export default RecommendedList;
