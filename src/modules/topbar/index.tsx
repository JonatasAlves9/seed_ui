import React from 'react';
import type { ViewProps } from 'react-native';
import { Container, Title, ViewIconLeft, ViewIconRight } from './styles';

interface props extends ViewProps {
  iconLeft?: React.ReactNode;
  title: string;
  iconRight?: React.ReactNode;
}

export const TopBar = ({ iconLeft, iconRight, title, ...rest }: props) => {
  return (
    <Container {...rest}>
      <ViewIconLeft>{iconLeft}</ViewIconLeft>
      <Title>{title}</Title>
      <ViewIconRight>{iconRight}</ViewIconRight>
    </Container>
  );
};
