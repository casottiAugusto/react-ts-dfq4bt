import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Calculadora from './components/Calculadora';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculadora />
  </StrictMode>
);
