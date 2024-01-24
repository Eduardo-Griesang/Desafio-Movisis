import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px 0;

  div {
    align-items: center;
    display: flex;
    gap: 10px;
    img {
      width: 15%;
    }
    h1 {
      color: #464646;
    }
  }
`;