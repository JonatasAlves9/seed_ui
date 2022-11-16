import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@rneui/themed';
import DrawerNavigator from './DrawerNavigator';
import Avatars from '../views/avatars';
import Cards from '../views/cards';
import Buttons from '../views/buttons';
import Inputs from '../views/inputs';
import LinearProgress from '../views/linearProgress';
import CheckBox from '../views/checkbox';
import FAB from '../views/fab';
import Badge from '../views/badge';

const Drawer = createDrawerNavigator();

function RootNavigator() {
  const { theme } = useTheme();

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme?.colors.background,
          primary: '',
          card: '',
          text: '',
          border: '',
          notification: '',
        },
        dark: theme.mode === 'dark',
      }}
    >
      <Drawer.Navigator
        drawerContent={DrawerNavigator}
        drawerContentOptions={{
          activeTintColor: theme?.colors?.secondary,
          activeBackgroundColor: 'transparent',
          inactiveTintColor: theme?.colors?.grey0,
          inactiveBackgroundColor: 'transparent',
          labelStyle: {
            fontSize: 15,
            marginLeft: 0,
          },
        }}
        drawerStyle={{
          backgroundColor: theme?.colors?.grey4,
        }}
      >
        <Drawer.Screen name="Avatars" component={Avatars} />
        <Drawer.Screen name="Badge" component={Badge} />
        <Drawer.Screen name="Buttons" component={Buttons} />
        <Drawer.Screen name="Cards" component={Cards} />
        <Drawer.Screen name="Checkbox" component={CheckBox} />
        <Drawer.Screen name="FAB" component={FAB} />
        <Drawer.Screen name="Inputs" component={Inputs} />
        <Drawer.Screen name="LinearProgress" component={LinearProgress} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
