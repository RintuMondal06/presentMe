import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen, SettingsScreen, EditprofileScreen, EditaddressScreen, NewaddressScreen, ChangePasswordScreen, OrderHistory } from '../src/screens/';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation , route}) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible: false});
    } else {
        navigation.setOptions({tabBarVisible: true});
    }
    
    return (
    <ProfileStack.Navigator headerMode='none'>
        <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
        <ProfileStack.Screen name="Settings" component={SettingsScreen}/>
        <ProfileStack.Screen name="Editprofile" component={EditprofileScreen}/>
        <ProfileStack.Screen name="Editaddress" component={EditaddressScreen}/>
        <ProfileStack.Screen name="NewAddress" component={NewaddressScreen}/>
        <ProfileStack.Screen name="ChangePassword" component={ChangePasswordScreen}/>
        <ProfileStack.Screen name="OrderHistory" component={OrderHistory}/>
    </ProfileStack.Navigator>
    )
};





export default ProfileStackScreen;