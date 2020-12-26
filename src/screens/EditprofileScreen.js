import React from 'react';
import { 
    View, 
    Text, 
    Image,
    StyleSheet ,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { CommonHeader } from './index';


import { AuthContext } from '../components/context';
import { COLORS, SIZES, FONTS, images, icons } from '../constants';

// import Users from '../model/users';

const Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'user1', 
        password: 'password', 
        userToken: 'token123'
    },
    {
        id: 2, 
        email: 'user2@email.com',
        username: 'user2', 
        password: 'pass1234', 
        userToken: 'token12345'
    },
    {
        id: 3, 
        email: 'testuser@email.com',
        username: 'testuser', 
        password: 'testpass', 
        userToken: 'testtoken'
    },
];

const EditprofileScreen = ({navigation, route}) => {

    return (
      <View style={styles.container}>
        <CommonHeader navigation={navigation} title={'Edit Profile'} route={route}/>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding : 20}}>
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Name"
                    style={styles.textInput}
                    autoCapitalize= "words"
                    onChangeText={(val) => textInputChange(val)}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>E-mail</Text>
            <View style={styles.action}>
                <Feather 
                    name="mail"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your mail id"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Phone Number</Text>
            <View style={styles.action}>
                <Feather 
                    name="phone"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Mobile No"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
               
            </View>
          
            <View style={styles.button}>
                <TouchableOpacity style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
};

export default EditprofileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor : COLORS.white,
    },
    shadow: {
        shadowColor: "#00f",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#4ca9c8",
        borderRadius: 10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
  });