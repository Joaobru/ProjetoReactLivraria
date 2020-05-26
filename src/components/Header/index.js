import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { MdHelp } from 'react-icons/md';


import { Container, Pesquisa, Menu, Image } from './styles';
import logo from '../../assets/img/mb.png';
import { Link } from 'react-router-dom';

function Header() {
  const [search, setSearch] = useState(false);
  const [optionsOn, setOptionsOn] = useState(false);

  function handleToggleVisible() {
    setSearch(!search);
  }

  function handleMenu() {
    setOptionsOn(!optionsOn);
  }

  return (
    <Container>
      <Menu optionsOn={optionsOn} id="menuBox">
        <nav>
          <ul>
            <Link to="/" onClick={handleMenu}>
              <li>
                <strong>Home</strong>
                <FaHome size={15} />
              </li>
            </Link>
            <Link to="/cart" onClick={handleMenu}>
              <li>
                <strong>Carrinho</strong>
                <FiShoppingCart size={15} />
              </li>
            </Link>
            <Link to="/genero" onClick={handleMenu}>
              <li>
                <strong>Gênero</strong>
                <FaBookOpen size={15} />
                <nav>
                  <ul>
                    <li>Romance</li>
                    <li>Aventura</li>
                    <li>Ação</li>
                    <li>Ficção</li>
                    <li>Outros</li>
                  </ul>
                </nav>
              </li>
            </Link>
            <Link to="/ajuda" onClick={handleMenu}>
              <li>
                <strong>Ajuda</strong>
                <MdHelp size={15} />
              </li>
            </Link>
          </ul>
        </nav>
        <button onClick={handleMenu} id="btnMenu">
          <IoIosMenu size={25} />
        </button>
      </Menu>
      <Link to="/">
        <Image search={search}>
          <img src={logo} alt="MB" />
        </Image>
      </Link>
      <Pesquisa search={search} id="pesquisaBox">
        <input placeholder="Pesquisar" id="inputPesquisa" />
        <button onClick={handleToggleVisible} id="btnPesquisar">
          <GoSearch size={20} color="white" />
        </button>
      </Pesquisa>
    </Container>
  );
}

export default Header;
