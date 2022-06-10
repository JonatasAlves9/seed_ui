import * as React from 'react';
import { Alert } from 'react-native-seedui';
import { View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}
    >
      <Alert />
    </View>
  );
}
