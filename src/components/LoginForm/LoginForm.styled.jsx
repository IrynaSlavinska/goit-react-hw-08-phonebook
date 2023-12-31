import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  background-color: #bfa89e;
  padding: 12px;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #000000;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  padding: 4px;
  font-size: 18px;
  border-radius: 4px;
  border: 2px solid transparent;
  outline: transparent;

  &: focus {
    border-color: #78a1bb;
  }

  &: hover {
    border-color: #78a1bb;
  }
`;

export const SubmitButton = styled.button`
  padding: 8px 24px;
  font-size: 16px;
  color: #ebf5ee;
  background-color: #8b786d;

  &: hover {
    background-color: #78a1bb;
  }
`;
