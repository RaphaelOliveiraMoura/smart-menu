import React from 'react';

import { AiOutlineRight } from 'react-icons/ai';

import topics from '~/mocks/topics';

import { Container } from './styles';

function TopicList() {
  return (
    <Container>
      {topics.map((topic) => (
        <article key={String(topic.id)}>
          <picture>
            <img src={topic.image} alt={topic.title} />
          </picture>
          <div>
            <h1>{topic.title}</h1>
          </div>
          <button type="button">
            <AiOutlineRight />
          </button>
        </article>
      ))}
    </Container>
  );
}

export default TopicList;
