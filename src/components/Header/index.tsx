import logo from '../../assets/image/logo_transparent.png'
import { Botao, Cabecalho, Interface, ItemLink, Links } from './styles'

const Header = () => {
  return (
    <Cabecalho>
      <Interface className="container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Imagem com a logo do Gyan" />
          </a>
        </div>
        <nav>
          <Links>
            <ItemLink>
              <a href="#">Início</a>
            </ItemLink>
            <ItemLink>
              <a href="#">Especialidades</a>
            </ItemLink>
            <ItemLink>
              <a href="#">Sobre</a>
            </ItemLink>
            <ItemLink>
              <a href="#">Projetos</a>
            </ItemLink>
          </Links>
        </nav>
        <div>
          <a href="#">
            <Botao>Contato</Botao>
          </a>
        </div>
      </Interface>
    </Cabecalho>
  )
}

export default Header
