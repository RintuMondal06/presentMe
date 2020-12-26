
import React, {useEffect} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    Pressable,
    Alert
} from 'react-native';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { ProductImages, CommonHeader } from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';




const DetailsScreen = ({ navigation, props, route }) => {

    const { itemId , productName } = route.params ;
    const [details, setDetails] = React.useState({});
    const [productimages, setProdutimages] = React.useState([]);
    const [user, setUser] = React.useState(null);
    

    useEffect(() => {
        getuser();
        fetch("http://103.145.50.200:4000/api/products/" + itemId)
        .then(res => res.json())
        .then(
            (result) => {
                setDetails(result)
                setProdutimages([{image : result.image}])
            },
            (error) => {
                Alert.alert('Unexpexted error occured! Please try again!');
            }
        )
    }, [])

    const getuser = async() => {
        let userToken = await AsyncStorage.getItem('userInfo');
        userToken = JSON.parse(userToken);
        setUser(userToken);
    }



    const handleWishlist = () => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + user.userToken
             },
            body: JSON.stringify({ productId: itemId })
        };

        

        fetch("http://103.145.50.200:4000/api/wishlist", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                if (result.success) {
                    Alert.alert('Wow!', result.message, ['Ok']);
                } else {
                    Alert.alert('Oops!', result.message, ['Ok']);
                }
            },
            (error) => {
                Alert.alert('Unexpexted error occured! Please try again!');
            }
        )
    }
    

    return (
        <View style={{flex : 1}}>
        <CommonHeader navigation={navigation} title={productName} route={route}/>
        
        <ScrollView>
            <View style={styles.container}>
                {/* Product Images Slider */}
                <View style={styles.sliderContainer}>
                    <ProductImages images={productimages}/>
                </View>

                <View style={{flexDirection : 'row', flex : 1, padding : 20}}>
                    <View style={{flex: 4, paddingTop : 10}}>
                        <Text style={{...FONTS.h2, textTransform : 'capitalize'}}>{productName}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection : 'row', justifyContent : 'flex-end',  paddingTop : 10 }}>
                        <View style={styles.iconWishlist}>
                            <Pressable onPress={() => handleWishlist()}>
                            <Image
                                source={icons.heartWhite}
                                resizeMode="contain"
                                style={{
                                width: 16,
                                height: 16,
                                }}
                            />
                            </Pressable>
                        </View>
                        <Image
                        source={icons.share}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            marginTop : 5,
                            tintColor : COLORS.gray
                        }}
                        />
                    </View>
                </View>


                <View style={{flexDirection : 'row', flex : 1, paddingHorizontal : 20}}>
                    <View style={{flex: 4, flexDirection : 'row'}}>
                        <Text style={{...FONTS.h2, color : COLORS.primary}}>Rs. {details.price}</Text>
                        <Text style={{...FONTS.h3, color : '#4daac9', paddingLeft : 10, textDecorationStyle : 'solid', textDecorationLine : 'line-through', paddingTop : 5}}>Rs. {details.regularprice}</Text>
                    </View>

                    <View style={{flex: 1, flexDirection : 'row', justifyContent : 'flex-end',  paddingTop : 10 }}>
                       
                    </View>
                </View>

                <View style={{ flex : 1, paddingHorizontal : 20, paddingVertical : 10}}>
                    <Text style={{...FONTS.body3, color: COLORS.black}}>
                    {details.description}
                    </Text>
                </View>


                {/* Review & Ratings section */}

                <View style={{ flex : 1, paddingHorizontal : 20, paddingVertical : 10, flexDirection : 'row' }}>
                    <View style={[styles.col4, {borderRightWidth : 1, borderRightColor : COLORS.gray}]}>
                        <View style={{flexDirection : 'row'}}>
                        <Text style={{...FONTS.body3}}>4.8</Text>
                        <Image
                        source={icons.starFull}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft : 8,
                            tintColor : COLORS.secondary
                        }}
                        />
                        </View>
                        <View style={{paddingVertical : 5}}>
                            <Text style={{...FONTS.body3}}> Rating </Text>
                        </View>
                    </View>
                    <View style={[styles.col4, {borderRightWidth : 1, alignItems : 'center', borderRightColor : COLORS.gray}]}>
                        <View style={{flexDirection : 'row'}}>
                            <Text style={{...FONTS.body3}}>180</Text>
                        </View>
                        <View style={{paddingVertical : 5}}>
                                <Text style={{...FONTS.body3}}> Reviews </Text>
                        </View>
                    </View>
                    <View style={[styles.col4, {borderRightWidth : 1, alignItems : 'center', borderRightColor : COLORS.gray}]}>
                        <View style={{flexDirection : 'row'}}>
                            <Text style={{...FONTS.body3}}>{details.sold}</Text>
                        </View>
                        <View style={{paddingVertical : 5}}>
                                <Text style={{...FONTS.body3, color : 'red'}}> Sold </Text>
                        </View>
                    </View>
                    <View style={[styles.col4, {alignItems : 'center'}]}>
                        <View style={{flexDirection : 'row'}}>
                            <Text style={{...FONTS.body3}}>{details.quantity}</Text>
                        </View>
                        <View style={{paddingVertical : 5}}>
                                <Text style={{...FONTS.body3, color : details.quantity > 0 ? 'green' : 'red'}}> {details.quantity > 0 ? 'In Stock' : 'Out of Stock'} </Text>
                        </View>
                    </View>
                </View>
                
                {/* SEPARATOR */}
                <View style={{borderTopWidth : 1, marginHorizontal : 20, borderTopColor : COLORS.gray}}></View>
                

                <View style={{flexDirection : 'row', flex : 1, paddingHorizontal : 20, paddingVertical : 10, }}>
                        <View style={{flex : 1,borderRightColor : COLORS.gray, borderRightWidth : 1}}>
                            <Text style={{...FONTS.body3}}> Same Day Delivery </Text>
                            <View style={{flexDirection : 'row', paddingVertical : 5}}>
                                <Text style={{...FONTS.body3, color : details.onedayDelivery === "true" ? 'green' : 'red'}}> 
                                {details.onedayDelivery === "true" ? 'Available'  : 'Unavailable'}</Text>
                                <Image
                                source={icons.delivery}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft : 8,
                                    tintColor : COLORS.gray
                                }}
                                />
                            </View>
                        </View>

                        <View style={{flex : 1, paddingLeft : 20}}>
                           <Text style={{...FONTS.body3}}> Drone Delivery </Text>
                            <View style={{flexDirection : 'row', paddingVertical : 5}}>
                                <Text style={{...FONTS.body3, color : 'red'}}> Unavailable</Text>
                                <Image
                                source={icons.drone}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft : 8,
                                    tintColor : COLORS.gray
                                }}
                                />
                            </View>
                        </View>
                </View>


            </View>
        </ScrollView>
        
        <View style={styles.footer}>
                <View style={{flex : 2,  paddingLeft : 20, flexDirection : 'row', alignItems : 'center'}}>
                    <Image
                    source={icons.buy}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        marginRight : 8,
                        tintColor : COLORS.white
                    }}
                    />
                <Text style={{...FONTS.body3, color : COLORS.white}}> Buy Now</Text>
                </View>
                <View style={{flex : 1, backgroundColor : COLORS.secondary, flexDirection : 'row', alignItems : 'center', justifyContent : 'flex-end', paddingRight : 20}}>
                <Text style={{...FONTS.body3, color : COLORS.white}}> Add</Text>
                    <Image
                    source={icons.cart}
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
    container: {
        flex: 1,
        backgroundColor : COLORS.white,
        paddingVertical : 20
    },
    sliderContainer : {
        flex : 1,
        height : 300
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
    iconWishlist : {
        backgroundColor : COLORS.secondary,
        borderRadius : 50,
        padding : 6,
        marginRight : 5
    },
    col4 : {
        flex : 1,
    },
    footer : {
        width : '100%',
        flexDirection : 'row',
        backgroundColor : COLORS.primary,
        height : 60
    },
});

export default DetailsScreen;
