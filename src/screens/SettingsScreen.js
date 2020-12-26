import React from 'react';
import { 
    View, 
    Text, 
    Image,
    StyleSheet ,
    Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { CommonHeader } from './index';


import { AuthContext } from '../components/context';
import { COLORS, SIZES, FONTS, images, icons } from '../constants';


const SettingsScreen = ({navigation, route}) => {

   

    const { signIn } = React.useContext(AuthContext);

 
    return (
      <View style={styles.container}>
         <CommonHeader navigation={navigation} title={'Profile Settings'} route={route}/>
        <Animatable.View style={styles.header} animation={'slideInDown'}>
            <Animatable.Text animation={'slideInLeft'} delay={200} style={{...FONTS.h2, color : COLORS.white}}>Lucifer</Animatable.Text>
            <Animatable.Text delay={200} animation={'slideInRight'} style={{...FONTS.h3, color : COLORS.white}}>lucifer@mornignstar.com</Animatable.Text>
            <Image source={images.user} style={{width : 100, height : 100, borderRadius : 50, borderColor : COLORS.white, borderWidth : 2, position: 'absolute' , top : '70%'}}/>
        </Animatable.View>
        

        <View style={styles.footer}>
            <Pressable onPress={() => navigation.navigate('Editprofile')}>
            <Animatable.View animation={'zoomIn'} style={[styles.shadow , styles.itemList]}>
                <View style={{flex : 1, justifyContent : 'center'}}>
                    <FontAwesome 
                        name="edit"
                        color= {COLORS.primary}
                        size={30}
                    />
                </View>
                <View style={{flex : 6, justifyContent : 'center'}}>
                    <Text style={{...FONTS.h3, fontWeight : 'bold'}}>Edit Profile</Text>
                </View>
                <View style={{flex : 1, alignItems : 'flex-end', justifyContent : 'center'}}>
                    <Image 
                        source={icons.right}
                        style={{
                            width : 20
                        }}
                    />
                </View>
            </Animatable.View>
            </Pressable>

            
            <Pressable onPress={() => navigation.navigate('Editaddress')}>
            <Animatable.View animation={'zoomIn'} style={[styles.shadow , styles.itemList]}>
                <View style={{flex : 1, justifyContent : 'center'}}>
                    <FontAwesome 
                        name="address-book"
                        color= {COLORS.primary}
                        size={30}
                    />
                </View>
                <View animation={'zoomIn'} style={{flex : 6, justifyContent : 'center'}}>
                    <Text style={{...FONTS.h3, fontWeight : 'bold'}}>My Address</Text>
                </View>
                <View style={{flex : 1, alignItems : 'flex-end', justifyContent : 'center'}}>
                    <Image 
                        source={icons.right}
                        style={{
                            width : 20
                        }}
                    />
                </View>
            </Animatable.View>
            </Pressable>

            

            <Pressable onPress={() => navigation.navigate('ChangePassword')}>
            <Animatable.View animation={'zoomIn'} style={[styles.shadow , styles.itemList]}>
                <View style={{flex : 1, justifyContent : 'center'}}>
                    <FontAwesome 
                        name="history"
                        color= {COLORS.primary}
                        size={30}
                    />
                </View>
                <View style={{flex : 6, justifyContent : 'center'}}>
                    <Text style={{...FONTS.h3, fontWeight : 'bold'}}>Change Password</Text>
                </View>
                <View style={{flex : 1, alignItems : 'flex-end', justifyContent : 'center'}}>
                    <Image 
                        source={icons.right}
                        style={{
                            width : 20
                        }}
                    />
                </View>
            </Animatable.View>
            </Pressable>


            <Pressable onPress={() => navigation.navigate('OrderHistory')}>
            <Animatable.View animation={'zoomIn'} style={[styles.shadow , styles.itemList]}>
                <View style={{flex : 1, justifyContent : 'center'}}>
                    <FontAwesome 
                        name="edit"
                        color= {COLORS.primary}
                        size={30}
                    />
                </View>
                <View style={{flex : 6, justifyContent : 'center'}}>
                    <Text style={{...FONTS.h3, fontWeight : 'bold'}}>Order History</Text>
                </View>
                <View style={{flex : 1, alignItems : 'flex-end', justifyContent : 'center'}}>
                    <Image 
                        source={icons.right}
                        style={{
                            width : 20
                        }}
                    />
                </View>
            </Animatable.View>
            </Pressable>


            <Animatable.View animation={'zoomIn'} style={[styles.shadow , styles.itemList]}>
                <View style={{flex : 1, justifyContent : 'center'}}>
                    <FontAwesome 
                        name="sign-out"
                        color= {COLORS.primary}
                        size={30}
                    />
                </View>
                <View style={{flex : 6, justifyContent : 'center'}}>
                    <Text style={{...FONTS.h3, fontWeight : 'bold'}}>Logout</Text>
                </View>
                <View style={{flex : 1, alignItems : 'flex-end', justifyContent : 'center'}}>
                    <Image 
                        source={icons.right}
                        style={{
                            width : 20
                        }}
                    />
                </View>
            </Animatable.View>


           
        </View>
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#4ca9c8'
    },
    header: {
        flex: 2,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : COLORS.primary,
        borderBottomLeftRadius : SIZES.width / 4 ,
        borderBottomRightRadius : SIZES.width / 4 
    },
    footer: {
        flex : 5,
        paddingTop : '15%',
    },
    shadow: {
        shadowColor: "#00f",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // elevation: 5,
    },
    itemList : {
        padding : 15, 
        margin : 10, 
        flexDirection : 'row', 
        borderRadius : 10, 
        backgroundColor : COLORS.white
    }
  });