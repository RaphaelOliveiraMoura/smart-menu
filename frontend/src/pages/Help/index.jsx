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
        <h1>
          <span role="img" aria-label="credit card">
            💳&nbsp;
          </span>
          Posso realizar o pagamento pelo aplicativo ?
        </h1>
        <p>
          Atualmente o sistema não possui uma integração com meios de pagamento,
          mas já estamos providenciando isso!!
          <br />
          <br />
          Enquanto isso nossos garçons irão anotar todos seus gastos e consumos
          normalmente.
        </p>
      </article>
      <article>
        <h1>
          <span role="img" aria-label="credit card">
            🛒&nbsp;
          </span>
          Só consigo comprar produtos usando o aplicativo ?
        </h1>
        <p>
          Não, o nosso sistema é so um complementa caso você queira utiliza-ló,
          se preferir poderá ser atendido normalmente por um de nossos garçons.
        </p>
      </article>
      <article>
        <h1>
          <span role="img" aria-label="credit card">
            ↪️&nbsp;
          </span>
          Como devo fazer ao trocar de mesa ?
        </h1>
        <p>
          Caso queira trocar de mesa e já escaneou o QR de outra mesa, você pode
          facilmente troca-la com o botão &quot;Trocar de mesa&quot;, presente
          no ínicio desta página.
        </p>
      </article>
      <article>
        <h1>
          <span role="img" aria-label="credit card">
            🆙&nbsp;
          </span>
          Sistema integrado com nossa cozinha
        </h1>
        <p>
          No momento em que realizar o pedido de algum produto, automaticamente
          iremos recebe-lo na nossa cozinha e iremos trabalhar para prepara-lo e
          entrega-lo para você o mais rápido e com a melhor qualidade possível
        </p>
      </article>
    </Container>
  );
}

export default Help;
