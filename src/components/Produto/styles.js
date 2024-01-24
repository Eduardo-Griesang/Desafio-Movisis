import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Container = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  position: relative;
  text-align: center;
  width: 100%;
  div {
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 20px;
    h3 {
      font-size: 22px;
      font-weight: bold;
      padding: 5px 0 0 5px;
    }
    p {
      display: inline-block;
      color: #2A9F85;
      font-size: 22px;
    }
  }

  img{
    width: 60%;
  }
`;

export const Data = styled.div`
  color: #A3A3A3;
  font-size: 12px;
  position: absolute;
  top: 3px;
  left: 5px;
`;