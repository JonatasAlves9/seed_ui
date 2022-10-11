import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const SDButton = ({ title, ...rest }: Props) => {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <TextButton>{title}</TextButton>
    </Container>
  );
};
