import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';

import { Container, ProductTable, Total} from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QNTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <td>
            <img src="" alt="" />
          </td>
          <td>
            <strong>Titulo do Produto</strong>
            <span>131,30</span>
          </td>
          <td>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={1}/>
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </div>
          </td>
          <td>
            <strong>131,30</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1"/>
            </button>
          </td>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>1313,13</strong>
        </Total>
      </footer>
    </Container>
  );
}
