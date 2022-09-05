import { TextInput } from 'react-native';
import styled from 'styled-components/native';

interface TextInputProps {
  invalid?: boolean;
}

export const TextInputStyled = styled(TextInput)<TextInputProps>`
  border-radius: 10px;
  border-color: ${({ invalid }) => (invalid ? 'red' : '#333')};
  border-width: 1px;
  padding: 10px;
  font-size: 15px;
  width: 100%;
`;
