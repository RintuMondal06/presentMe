import React, {useState, useEffect} from "react";
import {
   View,
   Button
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// extra screens
import Tabs from "./navigation/tabs";
import RootStackScreen from './navigation/RootStackScreen';

import { AuthContext } from './src/components/context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContent } from "./src/components/DrawerContent";




const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

function NotificationsScreen({ navigation }) {
    const { signOut } = React.useContext(AuthContext);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => {signOut()}} title="Logout" />
      </View>
    );
  }

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const App = () => {
    
    const [userToken, setUserToken] = useState(null);
    
    const initialLoginState = {
      isLoading: true,
      userName: null,
      userToken: null,
    };

    const loginReducer = (prevState, action) => {
      switch( action.type ) {
        case 'RETRIEVE_TOKEN': 
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN': 
          return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGOUT': 
          return {
            ...prevState,
            userName: null,
            userToken: null,
            isLoading: false,
          };
        case 'REGISTER': 
          return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            isLoading: false,
          };
      }
    };
  
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    
    const authContext = React.useMemo(() => ({
      signIn: async(foundUser) => {
        try {
          await AsyncStorage.setItem('userInfo', JSON.stringify(foundUser));
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'LOGIN', id: foundUser.id, token: foundUser.userToken });
      },
      signOut: async() => {
        try {
          await AsyncStorage.removeItem('userInfo');
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      },
      signUp: () => {

      },
      }), []);


      useEffect(() => {
        setTimeout(async() => {
          // setIsLoading(false);
          let userToken;
          userToken = null;
          try {
            userToken = await AsyncStorage.getItem('userInfo');
            console.log(userToken);
            
          } catch(e) {
            console.log(e);
          }
          // console.log('user token: ', userToken);
          dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
      }, []);


    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer theme={theme}>
                { loginState.userToken !== null ? (
                <Drawer.Navigator initialRouteName="Home"  drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={Tabs} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="Logout" component={NotificationsScreen}/>
                </Drawer.Navigator>
                )
                :
                <RootStackScreen/>
                } 
                {/* <RootStackScreen/> */}
            </NavigationContainer>
        </AuthContext.Provider>
    );
};



export default () => {
    return <App />;
};
