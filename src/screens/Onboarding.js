
import React, { useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    Alert,
    Pressable,
    ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { COLORS, SIZES, FONTS, images, icons } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

  


const ProductSlider = ({ navigation,title, products }) => {
    
    const deleteWishlist = async (itemId) => {
        let userToken = await AsyncStorage.getItem('userInfo');
        userToken = JSON.parse(userToken);
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + userToken.userToken
             },
        };

        

        fetch("http://103.145.50.200:4000/api/wishlist/" + itemId, requestOptions)
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
        <View style={{flex : 1, backgroundColor : COLORS.white, flexWrap : 'wrap', flexDirection : 'row', justifyContent : 'space-between', paddingBottom : 20}}>
      
                 {products.map((item, i) => 
                //  <View key={i} style={{flex:1,width : '100%', flexWrap : 'wrap', backgroundColor : COLORS.secondary, margin : 2}}>
                 <View key={i} style={[styles.productBox , styles.shadow]} >
                     <Pressable>
                      <View style={styles.imgBox}>
                        <Image
                            source={{uri : item.image}}
                            resizeMode="stretch"
                            style={{
                            width: '100%',
                            height: 150
                            }}
                        />

                        {/* Wishlist Icon */}
                        <View style={styles.iconWishlist}>
                            <Pressable onPress={() => deleteWishlist(item._id)}>
                                <FontAwesome 
                                    name="close"
                                    color= {COLORS.white}
                                    size={20}
                                    />
                            </Pressable>
                        </View>
                      </View>
                     </Pressable>
                     <View style={styles.contentBox}>
                        <Text style={{...FONTS.h4, textTransform : 'capitalize'}}>{item.name}</Text>
                     </View>
                     
                 </View>
                  )}
        </View>
    );
};

const Onboarding = ({ navigation, route }) => {
    const [user, setUser] = React.useState(null);
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        getuser();
    }, []);

    const getuser = async() => {
        let userToken = await AsyncStorage.getItem('userInfo');
        userToken = JSON.parse(userToken);
        setUser(userToken);
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + userToken.userToken
             },
        };

        console.log(requestOptions);
        fetch("http://103.145.50.200:4000/api/wishlist/user/" + userToken._id, requestOptions )
        .then(res => res.json())
        .then(
            (result) => {
                setProducts( result['wishs']);
            },
            (error) => {
                Alert.alert('Unexpexted error occured! Please try again!');
            }
        )
    }


    return (
        <View style={styles.container}>
            <View style={{backgroundColor : COLORS.primary, padding : 15, flexDirection : 'row', alignItems : 'center' }}>
                <Text style={[styles.title, {...FONTS.h2}]}>My Wishlist</Text>
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
          backgroundColor : '#000000b0',
          borderRadius : 50,
          width : 30,
          height : 30,
          justifyContent : 'center',
          alignItems : 'center'
      },
      contentBox : {
          padding : 5
      }
});

export default Onboarding;
