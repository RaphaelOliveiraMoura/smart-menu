import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function PromotionList({ promotions }) {
  const formattedOldPrices = useMemo(() => {
    return promotions.map(() => {
      return '22,90 R$';
    }, {});
  }, [promotions]);

  const formattedPrices = useMemo(() => {
    return promotions.map(() => {
      return '20,90 R$';
    }, {});
  }, [promotions]);

  return (
    <Container>
      <h2>Promoções</h2>
      <ul>
        {promotions.map((item, index) => (
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
                    <span>{formattedOldPrices[index]}</span>
                    <strong>{formattedPrices[index]}</strong>
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

PromotionList.propTypes = {
  promotions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image_url: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

PromotionList.defaultProps = {
  promotions: [],
};

export default PromotionList;
