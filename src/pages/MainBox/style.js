import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  div {
    display: flex;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 600px;
    height: 400px;
    background: linear-gradient(180deg, #10202f 0%, #1d1621 100%);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
    border-radius: 23px;
    justify-content: space-between;

    span {
      font-size: 34px;
      width: 100%;
      margin-top: 36px;
      text-transform: uppercase;
      text-align: center;
    }

    input {
      color: #fff;
      width: 400px;
      height: 40px;
      font-size: 20px;
      text-align: center;
      background-color: #fff;

      border-bottom: 1px solid #c12242;
      background: linear-gradient(180deg, #10202f 0%, #1d1621 100%);
    }
    button {
      width: 175px;
      height: 40px;
      margin-top: 20px;
      color: #fff;
      font-size: 18px;
      border: none;
      cursor: pointer;
      background: #c12242;
      border-radius: 50px;
      margin-bottom: 56px;
      text-transform: uppercase;

      &:hover {
        background-color: #af374f;
      }
    }
  }
`;

export const Title = styled.span`
  font-size: 28px;
  width: 481px;
  margin-top: 36px;
  text-transform: uppercase;
`;
