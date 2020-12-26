import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Onboarding } from "../src/screens/";

import { icons, COLORS, SIZES } from "../src/constants";

import HomeStackScreen from './stacks';
import ProfileStackScreen from './ProfileStack';

const Tab = createBottomTabNavigator();

const tabOptions = {
    labelStyle : {
        fontSize : 12
    },
    style: {
        height: SIZES.height /12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
};

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 24,
                                        height: 24
                                    }}
                                />
                            );
                        case "Favourite":
                            return (
                                <Image
                                    source={icons.heart}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 24,
                                        height: 24
                                    }}
                                />
                            );
                        case "SurpriseMe":
                            return (
                                <Image
                                    source={icons.giftBox}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 24,
                                        height: 24
                                    }}
                                />
                            );
                        case "Explore":
                            return (
                                <Image
                                    source={icons.explore}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 24,
                                        height: 24
                                    }}
                                />
                            );
                        case "Profile":
                                return (
                                    <Image
                                        source={icons.user}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 24,
                                            height: 24
                                        }}
                                    />
                                );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
            />
            <Tab.Screen
                name="Favourite"
                component={Onboarding}
            />
            <Tab.Screen
                name="SurpriseMe"
                component={Home}
            />
            <Tab.Screen
                name="Explore"
                component={Home}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
