import React from 'react';

import helpImage from '~/assets/help.svg';
import history from '~/services/history';

import { Container } from './styles';

function Help() {
  function handleChangeTable() {
    history.push('/');
  }

  return (
    <Container>
      <button type="button" onClick={handleChangeTable}>
        Trocar de mesa
      </button>
      <img src={helpImage} alt="Ajuda" />
      <h2>Está com dúvidas de como funciona o sistema ?</h2>
      <article>
        <h1>Só consigo comprar produtos usando o aplicativo ?</h1>
        <p>
          Não, o nosso sistema é so um complementa caso você queira utiliza-ló,
          se preferir poderá ser atendido normalmente por um de nossos garçons.
        </p>
      </article>
      <article>
        <h1>Só consigo comprar produtos usando o aplicativo ?</h1>
        <p>
          Não, o nosso sistema é so um complementa caso você queira utiliza-ló,
          se preferir poderá ser atendido normalmente por um de nossos garçons.
        </p>
      </article>
      <article>
        <h1>Só consigo comprar produtos usando o aplicativo ?</h1>
        <p>
          Não, o nosso sistema é so um complementa caso você queira utiliza-ló,
          se preferir poderá ser atendido normalmente por um de nossos garçons.
        </p>
      </article>
      <article>
        <h1>Só consigo comprar produtos usando o aplicativo ?</h1>
        <p>
          Não, o nosso sistema é so um complementa caso você queira utiliza-ló,
          se preferir poderá ser atendido normalmente por um de nossos garçons.
        </p>
      </article>
    </Container>
  );
}

export default Help;
