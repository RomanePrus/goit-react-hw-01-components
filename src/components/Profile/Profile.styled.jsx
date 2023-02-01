import styled from 'styled-components';
export const ProfileCard = styled.div`
  width: 260px;
  margin: 16px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 0px 0px 4px 4px;
`;
export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 0px 2px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
export const Name = styled.p`
  font-weight: bold;
`;
export const Tag = styled.p``;
export const Location = styled.p``;
export const StatusList = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;
export const StatusItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 2px 1px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  text-align: center;
  margin: 7px;
  border-radius: 4px;
`;
export const StatusLabel = styled.span``;
export const StatuQuantity = styled.span``;
