import React from 'react';
import { View, ViewProps } from 'react-native';
import { styleContainer, styleContainerCentered } from './styles';

interface props extends ViewProps {
  children: React.ReactNode;
  centered?: boolean;
}

export const Container = ({ children, centered, ...rest }: props) => {
  return (
    <View {...rest} style={centered ? styleContainerCentered : styleContainer}>
      {children}
    </View>
  );
};
