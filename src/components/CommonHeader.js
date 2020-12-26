
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Pressable
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';




const CommonHeader = ({ navigation, title, route }) => {

    return (
        <View style={{backgroundColor : COLORS.primary, padding : 15, flexDirection : 'row', alignItems : 'center' }}>
            {route.name == 'Profile' ? 
                null
                :
                    (
                        <Pressable onPress={() => navigation.goBack()}>
                        <Image
                            source={icons.back}
                            resizeMode="contain"
                            style={{
                                width: 24,
                                height: 24,
                                tintColor : COLORS.white
                            }}
                        />
                        </Pressable>
                    )
            }
            
            <Text style={[styles.title, {...FONTS.h2}]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      color : COLORS.white,
      paddingLeft : 10
    }
});

export default CommonHeader;
