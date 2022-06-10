import React from 'react';
import { Text, View } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export const TesteView = () => {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text>Result: {result}</Text>
    </View>
  );
};
