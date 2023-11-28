import styled from 'styled-components'
import { cores } from '../../style'

export const Cabecalho = styled.header`
  padding: 40px 4%;

  img {
    ma
    width: 100px;
    height: 50px;
  }

  a {
    color: ${cores.cinza};
    display: inline-block;
    transition: 0.2s;

      &:hover {
        color: ${cores.branco};
        transform: scale(1.05);
      }
  }
`

export const Interface = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Links = styled.nav``

export const ItemLink = styled.li`
  display: inline-block;
  padding: 0 40px;
`

export const Botao = styled.button`
  cursor: pointer;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${cores.azulMarinho};
  border-radius: 30px;
  border: none;

  &:hover {
    box-shadow: 0px 0px 8px ${cores.azulMarinho};
  }
`
