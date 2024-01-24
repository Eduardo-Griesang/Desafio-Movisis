import styled from 'styled-components';

export const Container = styled.div`
  color: #A3A3A3;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  gap: 25px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 10px 0;

  section{
    align-items: start;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  select{
    border: 1px solid #2A9F85;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px 10px;
  }
  input {
    border: 1px solid #2A9F85;
    border-radius: 5px;
    cursor: pointer;
    padding: 3px 10px;
  }

  @media(min-width: 768px) {
    flex-direction: row;

    section{
      align-items: center;
      flex-direction: row;
    }
  }
`;