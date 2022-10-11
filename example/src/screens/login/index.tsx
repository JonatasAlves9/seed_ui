import * as React from 'react';

import { Button, Input, Wrapper } from './styles';

export default function Login() {
  return (
    <Wrapper centered>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Button title="Entrar" />
    </Wrapper>
  );
}
