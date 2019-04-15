import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin: 50px;
`;

export const Planets = styled.div`
  width: 300px;
  background: linear-gradient(180deg, #10202f 0%, #1d1621 100%);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  margin: 0 20px;

  display: flex;
  flex-direction: column;
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 40px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      padding: 25px;
      font-size: 28px;
    }
  }
`;
