import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export function Typewriter({ frases, velocidadeDigitar = 120, velocidadeApagar = 60, tempoPausa = 1500 }) {
  const [indexFrase, setIndexFrase] = useState(0);
  const [textoExibido, setTextoExibido] = useState('');
  const [estaApagando, setEstaApagando] = useState(false);

  useEffect(() => {
    const fraseCompleta = frases[indexFrase];

    // Se estiver digitando
    if (!estaApagando) {
      if (textoExibido.length < fraseCompleta.length) {
        const timer = setTimeout(() => {
          setTextoExibido(fraseCompleta.slice(0, textoExibido.length + 1));
        }, velocidadeDigitar);
        return () => clearTimeout(timer);
      } else {
        // Chegou no final da frase: pausa antes de começar a apagar
        const timer = setTimeout(() => setEstaApagando(true), tempoPausa);
        return () => clearTimeout(timer);
      }
    }

    // Se estiver apagando
    if (estaApagando) {
      if (textoExibido.length > 0) {
        const timer = setTimeout(() => {
          setTextoExibido(fraseCompleta.slice(0, textoExibido.length - 1));
        }, velocidadeApagar);
        return () => clearTimeout(timer);
      } else {
        // Apagou tudo: passa para a próxima frase da lista
        setEstaApagando(false);
        setIndexFrase((prev) => (prev + 1) % frases.length);
      }
    }
  }, [textoExibido, estaApagando, indexFrase, frases, velocidadeDigitar, velocidadeApagar, tempoPausa]);

  return (
    <TextoDigitando>
      {textoExibido}
      <Cursor>|</Cursor>
    </TextoDigitando>
  );
}

// Animação para o cursor vertical piscar como no terminal
const piscar = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const TextoDigitando = styled.span`
  color: #ffffff;
  font-family: inherit;
  font-weight: bold;
  font-size: 26px;
`;

const Cursor = styled.span`
  color: red;
  font-weight: bold;
  margin-left: 2px;
  animation: ${piscar} 0.8s infinite;
`;