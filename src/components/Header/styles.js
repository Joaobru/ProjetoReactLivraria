import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@1,700&display=swap');
  font-family: 'Balsamiq Sans', cursive;
  z-index: 1;
  color: #fff;
  max-height: 50px;
  max-width: 100vw;
  height: 100%;
  width: 100%;
  position: fixed;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1ab4ff;

  h1 {
    font-weight: bold;
    border-right: 3px solid #fff;
    padding: 0.2em 0.7em;
    width: 10%;
    height: 10px;
    font-size: 18pt;
  }

  img {
    width: 3.5em;
  }
`;

export const Pesquisa = styled.div`
  margin-right: 2%;
  display: flex;
  max-width: 200px;
  width: ${(props) => (props.search ? '100%' : '0')};
  height: ${(props) => (props.search ? '50%' : '0')};

  @media (min-width: 800px) {
    width: 100%;
    height: 50%;
    background: ${(props) => (props.search ? '#333' : 'none')};
    box-shadow: ${(props) =>
      props.search ? '2px 2px 2px rgba(0, 0, 0, 0.3)' : 'none'};

    button {
      right: 3%;
    }
  }

  display: flex;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  background: #333;
  border-radius: 5px;

  input {
    width: 80%;
    height: 100%;
    color: #fff;
    border: 0;
    border-radius: 1%;
    padding-left : 3%;
    display: ${(props) => (props.search ? 'block' : 'none')};
    ${(props) => props.search && css``}

    display: ${(props) => (props.search ? 'block' : 'none')};
    background: none;
    margin-left: 5%;

    ${(props) => props.search && css``}
  }

  button {
    background: none;
    border: 0;
    display: block;
    cursor: pointer;
    position: absolute;
    @media (max-width: 450px) {
      right: 5%;
    }
    top: 32%;
  }
`;

export const Menu = styled.div`
  margin-left: 2%;

  button {
    background: none;
    border: 0;
    cursor: pointer;
    display: block;
    position: relative;

    @media (min-width: 800px) {
      display: none;
    }
    color: ${(props) => (props.optionsOn ? 'white' : '#fff')};
  }
  nav {
    color: #000;
    position: absolute;
    left: 2%;
    width: 25%;
    display: ${(props) => (props.optionsOn ? 'block' : 'none')};
    background: #1f264b;
    border-radius: 5%;
    padding-top: 5%;
    @media (min-width: 550px) {
      padding-top: 1%;
      width: 10%;
    }

    ul {
      border-radius: 2%;
      margin-top: 15%;
      li {
        padding: 10px;
        color: white;
        border-top: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        strong {
          font-weight: bold;
          font-size: 9pt;
        }
        nav {
          display: none;
        }
      }
      li:hover,
      :active {
        border-radius: 5%;
        background: #1e90ff;
      }
    }
  }
  @media (min-width: 650px) {
    nav {
      width: 15%;
    }
  }

  @media (min-width: 800px) {
    nav {
      display: flex;
      align-items: center;
      background: none;
      top: -10%;
      margin-left: 5%;
      ul {
        margin-top: 0;
        display: flex;

        li {
          justify-content: space-between;
          border: 0;
          strong {
            font-size: 11pt;
            margin-right: 14px;
          }

          nav {
            display: none;
          }
        }
        li:hover,
        li:active {
          border-radius: 5%;
          background: #333;

          nav {
            display: grid;
            position: absolute;
            margin-top: 40%;
            left: calc(100% - 70px);
            background: #333;
            max-width: 200px;
            width: 100%;
            ul {
              margin-top: 0;
              padding: 10px;
              z-index: 1;
              display: block;
              li {
              }
              li + li {
                border-top: 1px solid #fff;
              }
              li:hover,
              li:active {
                color: ${darken(0.4, '#fff')};
              }
            }

            &::before {
              content: '';
              position: absolute;
              left: calc(50% - 20px);
              top: -20px;
              width: 0;
              height: 0;
              border-left: 20px solid transparent;
              border-right: 20px solid transparent;
              border-bottom: 20px solid #333;
            }
          }
        }
      }
      li:hover,
      :active {
        background: #1e90ff;
        border-radius: 5%;
      }
    }
  }
`;

export const Image = styled.div`
  @media (min-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    margin-left: 5%;
  }
  display: ${(props) => (props.search ? 'none' : 'block')};
  @media (min-width: 450px) {
    display: ${(props) => (props.search ? 'block' : 'block')};
  }
`;
