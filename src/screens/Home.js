
import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    StatusBar,
    Pressable
} from 'react-native';
import { color } from 'react-native-reanimated';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { CustomHeader, ProductSlider } from './index';



const banners = [
    {
      image : images.skiVilla,
      title : 'Slider One',
      subtitle : 'This is slider one',
      desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
    },
    {
        image : images.skiVillaBanner,
        title : 'Slider One',
        subtitle : 'This is slider one',
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
    },
    {
        image : images.onboardingImage,
        title : 'Slider One',
        subtitle : 'This is slider one',
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
    }       
      
  ]

const categories = [
    {
        image : images.cat1
    },
    {
        image : images.cat2
    },
    {
        image : images.cat3
    },
    {
        image : images.cat4
    },
    {
        image : images.cat1
    }          
      
  ]

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


const Home = ({ navigation }) => {

    const [categories, setCategories] = React.useState([]);
    const [hotproducts, setHotproducts] = React.useState([]);
    const [featured, setFeatured] = React.useState([]);

    useEffect(() => {
        fetch("http://103.145.50.200:4000/api/categories/activecategory")
        .then(res => res.json())
        .then(
            (result) => {
                setCategories( result['categories'])
            },
            (error) => {
                Alert.alert('Unexpexted error occured! Please try again!');
            }
        )


        fetch("http://103.145.50.200:4000/api/hotproducts")
        .then(res => res.json())
        .then(
            (result) => {
                setHotproducts(result['hotprods'])
            },
            (error) => {
                Alert.alert('Unexpexted error occured! Please try again!');
            }
        )


        fetch("http://103.145.50.200:4000/api/products/client")
        .then(res => res.json())
        .then(
            (result) => {
                setFeatured(result['products'])
            },
            (error) => {
                Alert.alert('Unexpexted error occured! Please try again!');
            }
        )
    }, []);
    

    return (
        <ScrollView>
            <StatusBar animated backgroundColor={COLORS.primary} barStyle="light-content" />
            {/* header & banner section */}
            <CustomHeader navigation={navigation} banners={banners} />
            {/* categories section */}
            <View style={styles.categories}>
            <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}>
                 {categories.map((item, i) => 
                 <Pressable key={i} onPress={() => navigation.navigate('Listing')}>
                 <View style={styles.catBox}>
                     <Image
                        source={{uri : item.icon}}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40
                        }}
                        />
                 </View>
                 </Pressable>
                  )}
            </ScrollView>
            </View>

            {/* Offer Banner  */}
            <View style={{flex : 1,paddingVertical : 20,paddingHorizontal :10, backgroundColor : COLORS.white}}>
                    <Image
                        source={images.offerBanner}
                        resizeMode = 'stretch'
                        style={{
                            width: '100%',
                            height: 110,
                            borderRadius : SIZES.radius
                        }}
                    />
            </View>

            {/* Product section */}
            <ProductSlider products={hotproducts} title={'Hot Products'} navigation={navigation}/>

            <ProductSlider products={featured} title={'Featured Products'} navigation={navigation}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        justifyContent : 'flex-end'
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
    categories : {
        flex : 1,
        height : 90,
        backgroundColor : COLORS.white,
    },
    catBox : {
        width : SIZES.width/5.3,
        backgroundColor : '#f9636380',
        alignContent : 'space-between',
        alignItems : 'center',
        padding : 10,
        margin : 10,
        borderRadius : 22
    }
});

export default Home;
