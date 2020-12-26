
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    Pressable
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { CommonHeader } from './index';
import * as Animatable from 'react-native-animatable';

const products = [
    {
      name : 'Product Two',
      image : images.prod2,
    },
    {
      name : 'Product Four',
      image : images.prod4
    },
    {
        name : 'Product Five',
        image : images.prod5
    },
    {
        name : 'Product Six',
        image : images.prod6
    },
  ]



const CollectionView = ({navigation, products}) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {products.map((item, i) =>
            <View style={styles.prodBox} key={i}>
                <Image
                source={item.image}
                resizeMode= 'stretch'
                style={{
                    width : '100%',
                    height : 100,
                }}
                />
                <View style={{borderColor : COLORS.gray,borderWidth : 1, paddingVertical : 10, borderTopWidth : 0, paddingLeft : 5}}>
                    <Text style={{...FONTS.h4}}>{item.name}</Text>
                </View>
            </View>
            )}
        </ScrollView>
    );
}





const ProfileScreen = ({ navigation, props, route }) => {


    return (
        <View style={{flex : 1, backgroundColor : COLORS.white}}>
            <View style={{flexDirection : 'row'}}>
                <View style={{flex : 4}}>
                    <CommonHeader navigation={navigation} title={'My Profile'} route={route} />
                </View>
                <View style={{flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : COLORS.primary, height : 60}}>
                    <Pressable onPress={() => navigation.navigate('Settings')}>
                        <Image
                        source={icons.settings}
                        resizeMode='contain'
                        style={{
                            width : 20,
                            tintColor : COLORS.white
                        }}
                        />
                    </Pressable>
                </View>
            </View>
            
            <ScrollView>
                <Animatable.View style={{flexDirection : "row", marginHorizontal : 20, paddingVertical : 20, borderBottomColor : COLORS.gray, borderBottomWidth : 1}} animation={'bounceIn'}>
                    <View style={{flex : 1}}>
                        <Image
                        source={images.user}
                        style={{
                            width : 60,
                            height : 60,
                            borderRadius : 60/2
                        }}
                        />  
                    </View>
                    <View style={{flex : 3}}>
                        <Text style={{...FONTS.h2}}>Anonymous User</Text>
                        <Text style={{...FONTS.body4, color : COLORS.gray}}>Male | 24 | Developer</Text>
                    </View>
                </Animatable.View>
                <Animatable.View style={{padding : 20 }} animation={'fadeInUp'}>
                    <View style={{flexDirection : 'row'}}>
                         <View style={{flex : 1}}>
                             <Text style={{...FONTS.h3}}>Order Status</Text>
                         </View>
                         <View style={{flex : 1, alignItems : 'flex-end'}}>
                            <Text style={{...FONTS.body3, color : COLORS.primary}}>History</Text>
                         </View>
                    </View>
                    
                    <View style={[styles.shadow , {width : '100%', marginVertical : 20, height : 100}]}>
                        <Image
                        source={images.orderStatus}
                        resizeMode= 'stretch'
                        style={{
                            width : '100%',
                            height : 100,
                            borderRadius : 10
                        }}
                        /> 
                    </View>

                </Animatable.View>
                <Animatable.View style={{padding : 20 }} animation={'fadeInUp'} delay={800}>
                    <View style={{flexDirection : 'row'}}>
                         <View style={{flex : 1}}>
                             <Text style={{...FONTS.h3}}>My Collection</Text>
                         </View>
                         <View style={{flex : 1, alignItems : 'flex-end'}}>
                            <Text style={{...FONTS.body3, color : COLORS.primary}}>5 Items</Text>
                         </View>
                    </View>
                    
                    <View style={[styles.shadow , {width : '100%', marginVertical : 20}]}>
                            <CollectionView products={products}/>
                    </View>

                </Animatable.View>
               
            </ScrollView>
    
        </View>
    );
};

const styles = StyleSheet.create({
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
    prodBox : {
        width : SIZES.width/3.55,
        marginRight : 15,
    }
});

export default ProfileScreen;
