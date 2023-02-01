import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  box-shadow: 0px 2px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 0px 0px 4px 4px;
  }
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Status = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#069c06' : 'tomato')};
`;
