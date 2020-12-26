import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, SignupScreen, LoginScreen, ForgetPassScreen } from '../src/screens/';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
    return (
    <RootStack.Navigator headerMode='none' initialRouteName="WelcomeScreen">
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignupScreen}/>
        <RootStack.Screen name="ForgetPassScreen" component={ForgetPassScreen}/>
    </RootStack.Navigator>
    )
};

export default RootStackScreen;