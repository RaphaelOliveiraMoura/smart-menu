import React from 'react';

import { Link } from 'react-router-dom';

import { promotions } from '~/mocks/homeInfo';

import { Container } from './styles';

function PromotionList() {
  return (
    <Container>
      <h2>Promoções</h2>
      <ul>
        {promotions.map((item) => (
          <li key={String(item.id)}>
            <Link to={`/item/${item.id}`}>
              <article>
                <picture>
                  <img src={item.image} alt={item.title} />
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

export default PromotionList;
