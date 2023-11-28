import { createGlobalStyle } from 'styled-components'

export const cores = {
  verdeEscuro: '#002a41',
  verdeClaro: '#004a66',
  azulEscuro: '#090E16',
  azulMarinho: '#00b1c6',
  branco: '#fff',
  preto: '#000',
  roxo: '#7b4ae2',
  roxoClaro: '#7B4AE21A',
  cinza: '#ccc'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background-color: ${cores.preto};
    height: 100vh;
  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
`
