import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '@/shared/styles';
import { App } from '@/pages';

render(
  <BrowserRouter>
    <App />
    <GlobalStyle />
  </BrowserRouter>
  , document.getElementById('root'));
