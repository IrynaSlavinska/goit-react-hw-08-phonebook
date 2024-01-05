import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContactsHeader = styled.div`
  background-color: #7ad9f7;
  padding: 12px 80px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 50px;
`;
export const MyContacts = styled.p`
  font-size: 20px;
  color: #000000;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #e9af3d;
`;

export const AddButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #e9af3d;
`;

export const List = styled.ul`
  background-color: #7ad9f7;
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

export const Item = styled.li`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #e9af3d;
`;

export const ContactData = styled.p`
  font-size: 20px;
  color: #000000;
  margin-bottom: 4px;
`;

export const DeleteContactBtn = styled.button`
  background-color: transparent;
`;
