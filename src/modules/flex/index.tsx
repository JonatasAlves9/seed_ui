import React from 'react';
import { View, ViewProps } from 'react-native';
import { styleFlex, styleFlexWrap } from './styles';

interface props extends ViewProps {
  children: React.ReactNode;
  isWrap?: boolean;
}

export const Flex = ({ children, isWrap = false, ...rest }: props) => {
  return (
    <View {...rest} style={isWrap ? styleFlexWrap : styleFlex}>
      {children}
    </View>
  );
};
