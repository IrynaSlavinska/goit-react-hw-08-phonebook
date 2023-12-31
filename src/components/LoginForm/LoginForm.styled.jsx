import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  background-color: #7ad9f7;
  padding: 12px;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #000000;
  font-size: 20px;
  margin-bottom: 12px;
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

export const SubmitButton = styled.button`
  padding: 8px 24px;
  font-size: 16px;
  color: #000000;
  background-color: #e9af3d;
`;
