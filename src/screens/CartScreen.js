
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    FlatList
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { ProductImages, CommonHeader } from './index';



const products = [
    {
      name : 'Product One',
      image : images.prod1,
      Shortdes : 'Wireless battery long lasting'
    },
    {
      name : 'Product Two',
      image : images.prod2,
      Shortdes : 'Red & White Mix'
    },
    {
      name : 'Product Three',
      image : images.prod3,
      Shortdes : 'Wireless battery long lasting'
    },
  ]

  const Item = ({ item }) => (
    <View style={styles.productBox}>
        <View style={{flex : 1.5}}>
            <Image
            source={item.image}
            resizeMode='stretch'
            style={{
                width: '100%',
                height: 100,
            }}
            />
        </View>
        <View style={{flex : 3.5, paddingLeft : 20}}>
            <Text style={{...FONTS.h3}}>{item.name}</Text>
            <Text style={{...FONTS.body4, color : COLORS.gray}}>{item.Shortdes}</Text>
            <View style={{flexDirection : 'row', flex : 1, alignItems : 'center'}}>
                <View style={{flex : 1}}>
                    <Text style={{...FONTS.body3, color : COLORS.secondary}}> Rs. 999 </Text>
                </View>
                <View style={{flex : 1, flexDirection : 'row', alignContent : 'flex-end'}}>
                    <View style={{flex : 1, padding : 0, backgroundColor : COLORS.lightGray, alignItems : 'center'}}>
                        <Image
                        source={icons.remove}
                        resizeMode='contain'
                        style={{
                            width : 18
                        }}
                        />
                    </View>
                    <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                        <Text style={{...FONTS.body3, color : COLORS.black}}>0</Text>
                    </View>
                    <View style={{flex : 1, padding : 0, backgroundColor : COLORS.lightGray, alignItems : 'center'}}>
                        <Image
                        source={icons.plus}
                        resizeMode='contain'
                        style={{
                            width : 18
                        }}
                        />
                    </View>
                </View>
            </View>
        </View>
    </View>
  );

  const renderItem = ({ item, inedx }) => (
    <Item item={item} />
  );

  const Separator = ({index}) => (
    <View style={{borderTopWidth : 1, borderTopColor : COLORS.gray, marginVertical : 20}}></View>
  );

  const renderSeparator = () => (
      <Separator/>
  );


const CartScreen = ({ navigation, props, route }) => {

    return (
        <View style={{flex : 1}}>
        <CommonHeader navigation={navigation} title={'My Cart'} route={route}/>
        <View style={styles.subheader}>
            <Text style={{...FONTS.body4, color : 'red'}}>{'\u2B24'} You have items</Text>
        </View>

        

        <View style={styles.container}>        
            <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={renderSeparator}
        />
        </View>


        {/* Fixed footer */}
        
        <View style={styles.footer}>
                <View style={{flex : 1.5,  paddingLeft : 20, flexDirection : 'row', alignItems : 'center'}}>
                <Text style={{...FONTS.body3, color : COLORS.gray}}> Subtotal : </Text>
                <Text style={{...FONTS.body2, color : COLORS.secondary}}> Rs. 2999 </Text>
                </View>
                <View style={{flex : 1, backgroundColor : COLORS.primary, flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-end', paddingRight : 20}}>
                <Text style={{...FONTS.body3, color : COLORS.white}}> Checkout</Text>
                    <Image
                    source={icons.right}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        marginLeft : 8,
                        tintColor : COLORS.white
                    }}
                    />
                </View>
        </View>


        </View>
    );
};

const styles = StyleSheet.create({
    subheader : {
        paddingHorizontal : 20,
        paddingVertical : 10,
        backgroundColor : '#f9636380'
    },
    container: {
        flex: 1,
        backgroundColor : COLORS.white,
        paddingVertical : 20,
        paddingHorizontal : 20
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    footer : {
        width : '100%',
        flexDirection : 'row',
        height : 60,
        borderTopWidth : 1,
        borderTopColor : COLORS.gray
    },
    productBox : {
        flex : 1,
        flexDirection : 'row'
    }
});

export default CartScreen;
