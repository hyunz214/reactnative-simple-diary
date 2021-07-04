// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Launch from './pages/Launch';
import List from './pages/List';
import Detail from './pages/Detail';
import Form from './pages/Form';
import style from './utils/styleUtils'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: style.pink,
          },
          headerTintColor: style.darkPink,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}>
        <Stack.Screen name="Launch" component={Launch} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{title : '일기 목록'}}/>
        <Stack.Screen name="Detail" component={Detail} options={{title : '일기 상세'}}/>
        <Stack.Screen name="Form" component={Form} options={{title : '일기 작성'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;