import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function ProfileFake() {
  return (
    <li>
      <strong>CASO:</strong>
      <p>Caso teste</p>

      <strong>DESCRIÇÃO:</strong>
      <p>Descrição teste</p>

      <strong>VALOR:</strong>
      <p>R$ 100,00</p>

      <button type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </li>
  );
}
