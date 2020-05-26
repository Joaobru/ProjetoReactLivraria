import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: none;
  height: 100%;
  margin-top: 15%;

  @media (min-width: 800px) {
    margin-top: 4%;
  }

  div {
    max-height: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;

    border-bottom: 3px solid #1ab4ff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);

    strong {
      font-weight: bold;
      font-size: 18pt;
      margin-right: 5%;
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
    background: #eee;

    h5 {
      font-weight: bold;
      font-size: 14pt;
      color: #000;
      position: absolute;
      right: 13%;
      top: 32%;
    }

    button {
      position: absolute;
      right: 2%;
      top: 20%;
      background: none;
      border: none;
    }
  }
`;

export const ComboBox = styled.nav`
  width: 90%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 2%;
  margin-left: 10%;
  margin-top: 8%;
  border-bottom: 3px solid #1ab4ff;
  background: #333;

  div {
    display: flex;
    justify-content: space-between;
    color: #fff;
    border: none;
    width: 100%;
    max-height: 100px;
    height: 100%;
    background: none;
    text-align: center;

    strong {
      font-weight: bold;
      font-size: 12pt;
      margin-top: 0;
    }
    label {
      font-size: 10pt;
      position: absolute;
      right: 2%;
      margin-top: 10%;
    }
    img {
      width: 100%;
      max-width: 100px;
      max-height: 100px;
      border-radius: 4px;
      border-right: 3px solid #1ab4ff;
    }
  }
`;
