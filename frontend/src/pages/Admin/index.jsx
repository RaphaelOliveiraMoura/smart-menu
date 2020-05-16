import React, { useEffect, useState, useCallback } from 'react';

import DraggableComponent from '~/components/DraggableComponent';
import DroppableComponent from '~/components/DroppableComponent';
import api from '~/services/api';

import { Container } from './styles';

const DRAG_AND_DROP_TYPE = 'ADMIN_DASHBOARD_DRAG_AND_DROP';

function Admin() {
  const [orders, setOrders] = useState({
    inProgress: [],
    finished: [],
    delivered: [],
  });

  const loadOrders = useCallback(async () => {
    const response = await api.get('/dashboard');
    setOrders(response.data);
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  async function handleDropFinishOrder({ id: idOrder }) {
    await api.post('orders/finished', { idOrder });
    await loadOrders();
  }

  return (
    <Container>
      <DroppableComponent type={DRAG_AND_DROP_TYPE}>
        <section>
          <h2>Pendentes</h2>
          <ul>
            {orders.inProgress.map((order) => (
              <li key={String(order.id)}>
                <DraggableComponent id={order.id} type={DRAG_AND_DROP_TYPE}>
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
                </DraggableComponent>
              </li>
            ))}
          </ul>
        </section>
      </DroppableComponent>

      <DroppableComponent
        type={DRAG_AND_DROP_TYPE}
        onDrop={handleDropFinishOrder}
      >
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
      </DroppableComponent>

      <section>
        <h2>Entregues</h2>
        <ul>
          {orders.delivered.map((order) => (
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
