import styled from 'styled-components';

export const StatSection = styled.section`
  margin: 16px auto;
  background-color: #fff;
  width: 260px;
`;

export const StatTitle = styled.h2`
  text-align: center;
  padding: 16px 0;
  color: purple;
  font-size: 16px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  background-color: lightgray;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 2px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const Label = styled.span`
  font-size: 12px;
  color: #fff;
  filter: drop-shadow(2px 2px 2px black);
`;

export const Percentage = styled.span`
  font-size: 16px;
  color: #fff;
  filter: drop-shadow(2px 2px 2px black);
`;
