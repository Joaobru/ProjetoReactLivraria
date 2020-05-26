import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10%;
  background: none;
  padding: 0;
  min-height: 100vh;
  
  a {
    background: #dde;
    transition: all 0.2s;

    &:hover {
      footer {
        background: #eee;
      }
    }

    footer {
      max-height: 50px;
      height: 100%;
      bottom: 0;
      position: fixed;
      width: 100%;
      display: flex;
      align-items: center;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);

      h5 {
        font-weight: bold;
        font-size: 14pt;
        color: #333;
        position: absolute;
        right: 13%;
        top: 32%;
      }

      button {
        position: absolute;
        right: 2%;
        top: 22%;
        color: #333;
        background: none;
        border: none;
      }
    }
  }

  img {
    max-height: 300px;
    height: 30%;
    width: 35%;
    background: none;
    border-radius:100%;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    transition: filter 0.5s;
  }
  img:hover{
    filter: brightness(80%);
  }

  div {
    width: 90%;
    text-align: center;
    padding-bottom: 5px;
    margin-top: 2%;
    margin-left:auto;
    margin-right:auto;

    @media (min-width: 800px) {
      width: 50%;
      margin-left: 25%;
    }

    strong {
      font-weight: bold;
      font-size: 14pt;
      color: #1e90ff;
    }

    div {
      width: 90%;
      margin-top: 2%;
      margin-left: 2%;
      text-align: justify;
      box-shadow: none;

      h3 {
        font-weight: bold;
        font-size: 10pt;
        color: #333;
      }
      @media(min-width: 700px){
        h3{
          font-size:12pt;
        }
      }
      a {
        color: #888;
        font-weight: bold;
      }
    }
  }
`;

export const Media = styled.div`
  margin-left:auto;
  margin-right:auto;
  padding-top:7%;

  @media(min-width:550px){
    padding-top:0;
  }
`;


export const Badge = styled.div`
  position: absolute;
  width: 100%;

  button {
    right: 0;
    position: absolute;
    border: 0;
    background: #0797F1;
    width: 150px;
    font-size: 16pt;
    font-weight: bold;
    padding: 6px;
    border-radius: 4px;
    color: whitesmoke;
    transition: all 0.2s;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);

    &:hover {
      color: #0797F1;
      background: whitesmoke;
      border: 0;
    }
  }
`;