import React, { useState } from 'react';

import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

import api from '~/services/api';

function Item({ finishedRequest }) {
  const [rating, setRating] = useState(
    finishedRequest.rating && finishedRequest.rating.stars
  );

  function handleRatingChange(stars) {
    async function fetchRating() {
      await api.post(`orders/${finishedRequest.id}/rating`, { stars });
    }

    setRating(stars);
    fetchRating();
  }

  return (
    <li>
      <article>
        <img
          src={finishedRequest.product.image_url}
          alt={finishedRequest.product.title}
        />
        <div className="content">
          <h1>
            {finishedRequest.ammount}
            x&nbsp;
            {finishedRequest.product.title}
          </h1>
          <h2>
            Entregue há&nbsp;
            <strong>{finishedRequest.formattedFinishedAt}</strong>
          </h2>
          <Rating
            name={`rating-${finishedRequest.id}`}
            value={rating}
            onChange={(_, value) => handleRatingChange(value)}
          />
          <p>Deixe sua avaliação !!</p>
        </div>
      </article>
    </li>
  );
}

Item.propTypes = {
  finishedRequest: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    ammount: PropTypes.number,
    formattedFinishedAt: PropTypes.string,
    product: PropTypes.shape({
      title: PropTypes.string,
      image_url: PropTypes.string,
    }),
    rating: PropTypes.shape({
      stars: PropTypes.number,
    }),
  }).isRequired,
};

export default Item;
