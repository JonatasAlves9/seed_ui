import * as React from 'react';
import { Text } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import { Container, SDButton, SDTextInput } from 'react-native-seedui';

export default function App() {
  return (
    <ThemeProvider
      theme={{
        primary: 'red',
      }}
    >
      <Container centered>
        <SDTextInput placeholder="Digite aqui" />
        <SDButton title="Entrar" />
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
        <Text>Teste</Text>
      </Container>
    </ThemeProvider>
  );
}
