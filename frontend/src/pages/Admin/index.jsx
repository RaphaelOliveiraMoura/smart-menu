import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container } from './styles';

function Admin() {
  const [orders, setOrders] = useState({ inProgress: [], finished: [] });

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/dashboard');
      setOrders(response.data);
    }

    loadOrders();
  }, []);

  return (
    <Container>
      <section>
        <h2>Pendentes</h2>
        <ul>
          {orders.inProgress.map((order) => (
            <li key={String(order.id)}>
              <article>
                <div className="order-content">
                  <img
                    src={order.product.image_url}
                    alt={order.product.title}
                  />
                  <div className="order-informations">
                    <h1>
                      {order.ammount}
                      x&nbsp;
                      {order.product.title}
                    </h1>
                    <span>Observações</span>
                    <p>{order.observations || '-'}</p>
                  </div>
                </div>
                <footer>
                  <strong>
                    Mesa&nbsp;
                    {order.table.id}
                  </strong>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Finalizados</h2>
        <ul>
          {orders.finished.map((order) => (
            <li key={String(order.id)}>
              <article>
                <div className="order-content">
                  <img
                    src={order.product.image_url}
                    alt={order.product.title}
                  />
                  <div className="order-informations">
                    <h1>
                      {order.ammount}
                      x&nbsp;
                      {order.product.title}
                    </h1>
                    <span>Observações</span>
                    <p>{order.observations || '-'}</p>
                  </div>
                </div>
                <footer>
                  <strong>Mesa 1</strong>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default Admin;
