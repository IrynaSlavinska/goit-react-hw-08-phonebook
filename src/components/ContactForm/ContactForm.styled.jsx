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

export const Group = styled.p`
  color: #000000;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RaioDiv = styled.div`
  position: relative;
  padding: 0px 0px 0px 26px;
  margin-bottom: 20px;
  line-height: 24px;

  &:before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    left: 0;
    top: 0;
    background-color: #ffffff;
    border-radius: 50%;
  }

  &:after {
    position: absolute;
    content: '';
    width: 14px;
    height: 14px;
    left: 3px;
    top: 3px;
    background-color: #78a1bb;
    border-radius: 50%;
  }
`;

export const RadioInput = styled.input`
  display: none;
`;
