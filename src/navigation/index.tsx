import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Container List
import TransactionList from '@screens/TransactionList';
import TransactionDetail from '@screens/TransactionDetail';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionList">
        <Stack.Screen
          name="TransactionList"
          component={TransactionList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
