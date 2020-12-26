
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    Pressable
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';




const ProductSlider = ({ navigation,title, products }) => {



    return (
        <View style={{flex : 1, backgroundColor : COLORS.white, marginBottom : SIZES.padding}}>
        <View style={styles.container}>
            <View style={{ flex : 1 }}>
                <Text style={{...FONTS.h3}}>{title}</Text>
            </View>
            <View style={{ flex : 1, alignItems : 'flex-end' }}>
                <Text style={{...FONTS.h3, color : COLORS.secondary}}>View More</Text>
            </View>
        </View>

        <View style={{flex : 1}}>
            <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}>
                 {products.map((item, i) => 
                 <View key={i} style={[styles.productBox , styles.shadow]} >
                     <Pressable onPress={() => navigation.navigate('DetailsScreen', {
                            itemId: item._id,
                            productName: item.name
                        })}>
                      <View style={styles.imgBox}>
                          {console.log(typeof(item.image))}
                        <Image
                            source={{uri : String(item.image)}}
                            resizeMode="stretch"
                            style={{
                            width: '100%',
                            height: 100
                            }}
                        />

                        {/* Wishlist Icon */}
                        <View style={styles.iconWishlist}>
                            <Image
                                source={icons.heartWhite}
                                resizeMode="contain"
                                style={{
                                width: 18,
                                height: 18,
                                }}
                            />
                        </View>
                      </View>
                     </Pressable>
                     <View style={styles.contentBox}>
                        <Text style={{...FONTS.h4}}>{item.name}</Text>
                        <View style={{flexDirection : 'row'}}>
                            <Image
                                source={icons.starFull}
                                resizeMode="contain"
                                style={{
                                width: 12,
                                height: 12,
                                marginTop : 5,
                                marginRight : 5
                                }}
                            />
                            <Text style={{...FONTS.body4, color : COLORS.gray}}>4.9</Text>
                            <Text style={{...FONTS.body4, color : COLORS.gray, paddingHorizontal : 5}}>|</Text>
                            <Text style={{...FONTS.body4, color : COLORS.gray}}>{item.sold} Sold</Text>
                        </View>
                     </View>

                     {/* Footer */}
                     
                     <View style={{flexDirection : 'row'}}>
                                <View style={{flex : 4}}>
                                    <Text style={{...FONTS.h4, paddingLeft : 5, paddingTop : 5}}>Rs. {item.price}</Text>
                                </View>
                                <View style={{flex : 1, backgroundColor : '#ef6e71', padding : 5, borderTopLeftRadius : 5}}>
                                    <Image
                                    source={icons.cart}
                                    resizeMode="contain"
                                    style={{
                                    width: 20,
                                    height: 20,
                                    tintColor : COLORS.white
                                    }}
                                    />
                                </View>
                    </View>
                     
                 </View>
                  )}
            </ScrollView>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        paddingHorizontal : 10
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
    productBox :{
        width : SIZES.width/3.55,
        // alignItems : 'center',
        margin : 10,
        backgroundColor : COLORS.white
    },
    imgBox: {
        flex : 1,
        padding : 5,
        width : '100%'
    },
    iconWishlist : {
        position : 'absolute',
        top : '5%',
        right : '5%',
        backgroundColor : COLORS.secondary,
        borderRadius : 50,
        padding : 7
    },
    contentBox : {
        padding : 5
    }
});

export default ProductSlider;
