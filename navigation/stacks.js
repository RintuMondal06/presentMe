import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen, Home, CartScreen, ProductListing } from '../src/screens/';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation , route}) => {
    
    if (route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible: false});
    } else {
        navigation.setOptions({tabBarVisible: true});
    }
    
    return (
    <HomeStack.Navigator headerMode='none'>
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen name="DetailsScreen" component={DetailsScreen}/>
        <HomeStack.Screen name="Cart" component={CartScreen}/>
        <HomeStack.Screen name="Listing" component={ProductListing}/>
    </HomeStack.Navigator>
    )
};





export default HomeStackScreen;