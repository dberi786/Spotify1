
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuComponenet from "./screens/MenuComponenet";
import { Provider } from "react-redux";
import store from "./store";
import CartScreen from "./screens/CartScreen";
import LoadingScreen from "./screens/LoadingScreen";
import OrderScreen from "./screens/OrderScreen";
import Starting from "./screens/Starting";
import ThanksScreen from "./screens/ThanksScreen";

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Start"
          component={Starting} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}  options={{headerShown:false}}
        />
         <Stack.Screen
          name="Menu"
          component={MenuComponenet} 
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="Cart"
          component={CartScreen} 
          options={{headerShown:false}}
        />

<Stack.Screen
          name="Loading"
          component={LoadingScreen} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Thanks"
          component={ThanksScreen} 
          options={{headerShown:false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
export default MyStack;


