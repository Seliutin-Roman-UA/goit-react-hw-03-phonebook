import styled from 'styled-components';

export const Form = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 300px;
  border: 1px solid;
  box-shadow : 0 0 10px rgba(0, 0, 0, 0.7);
`;
export const NameNumber = styled.input`
  display: block;
  width: 250px;
`;
export const Btn = styled.button`
  padding: 4px;
  width: fit-content;
`;
