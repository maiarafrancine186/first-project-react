import React from 'react';

import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';



const versaoNova = document.getElementById('root')
  const root= createRoot(versaoNova) 
  root.render(<App /> )(<GlobalStyle />)




