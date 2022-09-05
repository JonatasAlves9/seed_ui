import React from 'react';
import type { TextInputProps } from 'react-native';
import { TextInputStyled } from './styles';

interface props extends TextInputProps {
  invalid?: boolean;
}

export const SDTextInput = ({ invalid, ...rest }: props) => {
  return <TextInputStyled {...rest} invalid={invalid} />;
};
