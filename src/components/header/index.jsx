import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  background-color: #af0300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 60px;

  & nav {
    display: flex;
    gap: 26px;
    align-items: center;
    & h1 {
      color: white;
    }
    & ul {
      display: flex;
      gap: 16px;
      & a {
        color: white;
        display: inline-block;
        line-height: 46px;
        padding: 0 16px;
        position: relative;
        &:hover,
        &.active {
          color: #f4796b;
        }

        &::after{
            content:"";
            width:0;
            transition-duration: 200ms;
            height: 4px;
            border-radius: 2px;
            background-color: #f4796b;
            position: absolute;
            bottom: 0;
            left: 50%;
        }

        &.active::after{
          width: 100%;
          left: 0;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <li>
            <NavLink to={"/"}>Início</NavLink>
          </li>
          <li>
            <NavLink to={"/cardapio"}>Cardápio</NavLink>
          </li>
          <li>
            <NavLink to={"/promocoes"}>Promoções</NavLink>
          </li>
        </ul>
      </nav>

      <div className="acoes">
        <NavLink to={"entrar"}>Entrar</NavLink>
        <button>Carrinho</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
