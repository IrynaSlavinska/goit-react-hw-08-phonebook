import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  width: 400px;
  background-color: #7ad9f7;
  padding: 12px;
  border-radius: 8px;
`;

export const Label = styled.label`
  color: #000000;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 4px;
  margin-top: 4px;
  border-radius: 4px;
  border: 2px solid transparent;
  outline: transparent;
  &: focus {
    border-color: #e9af3d;
  }
  &: hover {
    border-color: #e9af3d;
  }
`;
