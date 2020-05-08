import React from 'react';

import { Link } from 'react-router-dom';

import { recommended } from '~/mocks/homeInfo';

import { Container } from './styles';

function RecommendedList() {
  return (
    <Container>
      <h2>Recomendados</h2>
      <ul>
        {recommended.map((item) => (
          <li key={String(item.id)}>
            <Link to={`/item/${item.id}`}>
              <article>
                <picture>
                  <img src={item.image} alt={item.title} />
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

export default RecommendedList;
