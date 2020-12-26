
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    Pressable
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';

import BackgroundCarousel from './BackgroundCarousel';



const CustomHeader = ({ navigation, banners }) => {


    return (
        <View style={{flex : 1, backgroundColor : COLORS.white}}>
        <View style={styles.container}>
            <View style={{ flex : 1, marginHorizontal : 10, marginVertical:20 }}>
                <Pressable onPress={() => navigation.openDrawer()}>
                <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor : COLORS.white
                    }}
                />
                </Pressable>
            </View>
            <View style={styles.searchbar}>
                <TextInput
                style={{ width : '85%', height: '100%', paddingLeft : 20 }}
                placeholder="Search..."
                />
                 <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                        width: 24,
                        height: 24,
                        tintColor : COLORS.gray
                    }}
                />
            </View>
            <View style={{ flex : 1, marginHorizontal : 10, marginVertical:20, alignItems : 'flex-end' }}>
                <Pressable onPress={() => navigation.navigate('Cart')}>
                <Image
                    source={icons.cart}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor : COLORS.white
                    }}
                />
                </Pressable>
            </View>
        </View>
        <View style={[styles.bannner, styles.shadow]}>
            <BackgroundCarousel images={banners} />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        backgroundColor: COLORS.primary,
        height : 140
    },
    shadow: {
        shadowColor: COLORS.lightGray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    searchbar : {
        flex : 7, 
        marginHorizontal : 10, 
        marginVertical:20, 
        alignItems : 'center', 
        flexDirection : 'row',
        backgroundColor : COLORS.white, 
        height : 40,
        borderRadius : 50
    },
    bannner: {
        position : 'relative',
        bottom : '15%',
        left : '5%',
        right : '5%',
        width : '90%',
        height : 110,
        backgroundColor : COLORS.white,
        borderRadius : SIZES.radius,
        zIndex : 9
    }
});

export default CustomHeader;
