import styled from 'styled-components';

export const Table = styled.table`
  margin: 16px auto;
  width: 260px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 0px 0px 4px 4px;
`;

export const Header = styled.thead`
  text-transform: uppercase;
  color: #fff;
  background-color: blue;
`;

export const Row = styled.tr`
  text-align: center;
  border-radius: 10px;
  &:nth-child(even) {
    background: lightgray;
  }
  &:nth-child(odd) {
    background: #fff;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const FirstColumn = styled.td`
  text-align: start;
`;
