import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  div {
    display: flex;
  }
  form {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 90%;
    max-width: 600px;
    height: 400px;
    background: linear-gradient(180deg, #10202f 0%, #1d1621 100%);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
    border-radius: 23px;
    justify-content: space-around;

    span {
      font-size: 30px;
      width: 100%;
      margin-top: 36px;
      text-transform: uppercase;
      text-align: center;
    }

    input {
      color: #fff;
      width: 80%;
      height: 40px;
      font-size: 20px;
      text-align: center;
      background-color: #fff;

      border-bottom: ${props => (props.noInputerror === true ? '5px solid #fff' : '1px solid #c12242')};
      background: linear-gradient(180deg, #10202f 0%, #1d1621 100%);
    }
    button {
      width: 175px;
      height: 40px;
      color: #fff;
      font-size: 18px;
      border: none;
      cursor: pointer;
      background: #c12242;
      border-radius: 50px;
      text-transform: uppercase;

      &:last-child {
        margin-bottom: 30px;
      }

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
