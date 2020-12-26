import React from 'react';
import { 
    View, 
    Text, 
    Image,
    StyleSheet ,
    ScrollView,
    TouchableOpacity,
    TextInput,
    FlatList,
    Pressable
} from 'react-native';


import { COLORS, SIZES, FONTS, images, icons } from '../constants';


const products = [
    {
      name : 'Product One',
      image : images.prod1
    },
    {
      name : 'Product Two',
      image : images.prod2,
    },
    {
      name : 'Product Three',
      image : images.prod3
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
  


  const ProductSlider = ({ navigation,title, products }) => {
    return (
        <View style={{flex : 1, backgroundColor : COLORS.white, flexWrap : 'wrap', flexDirection : 'row', justifyContent : 'space-between', paddingBottom : 20}}>
      
                 {products.map((item, i) => 
                //  <View key={i} style={{flex:1,width : '100%', flexWrap : 'wrap', backgroundColor : COLORS.secondary, margin : 2}}>
                 <View key={i} style={[styles.productBox , styles.shadow]} >
                     <Pressable onPress={() => navigation.navigate('DetailsScreen')}>
                      <View style={styles.imgBox}>
                        <Image
                            source={item.image}
                            resizeMode="stretch"
                            style={{
                            width: '100%',
                            height: 150
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
                            <Text style={{...FONTS.body4, color : COLORS.gray}}>56 Sold</Text>
                        </View>
                     </View>

                     {/* Footer */}
                     
                     <View style={{flexDirection : 'row'}}>
                                <View style={{flex : 4}}>
                                    <Text style={{...FONTS.h4, paddingLeft : 5, paddingTop : 5}}>Rs. 500</Text>
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
        </View>
    );
};


const ProductListing = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            <View style={{backgroundColor : COLORS.primary, padding : 15, flexDirection : 'row', alignItems : 'center' }}>
            { route.name == 'Profile' ? 
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
            
                <Text style={[styles.title, {...FONTS.h2}]}>Home Decorators</Text>
            </View>
            <ScrollView
             showsHorizontalScrollIndicator={false}
             style={{flexWrap : 'wrap'}}
             >
            <ProductSlider products={products}/>
            </ScrollView>
        </View>
    );
};

export default ProductListing;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor : COLORS.lightGray
    },
    shadow: {
        shadowColor: "#00f",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation : 5
    },
    title: {
        color : COLORS.white,
        paddingLeft : 10
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
        width : SIZES.width/2.3,
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