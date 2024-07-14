import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../components/HomeScreen';
import CartScreen from '../../components/CartScreen';
import DetailsScreen from '../../components/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Cart" component={CartStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
