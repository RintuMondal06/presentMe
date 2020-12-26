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
import { CommonHeader } from './index';


import { COLORS, SIZES, FONTS, images, icons } from '../constants';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  


const Card = ({navigation}) => {
    return(
        <View style={[styles.cardContainer, styles.shadow]}>
            <View style={{flexDirection : 'row'}}>
                <View style={{flex : 1.5}}>
                    <Image
                       source={images.prod1}
                       resizeMode='stretch'
                       style={{width : 80, height : 70}}
                    />
                </View>
                <View style={{flex : 4}}>
                    <Text style={{...FONTS.h3, fontWeight : 'bold'}}>Dimpy Stuff Bear W/Heart (For U)</Text>
                    <Text style={{...FONTS.h3}}>Rs. 2000</Text>
                    <Text style={{...FONTS.body4}}>#PRME12345</Text>
                </View>
            </View>
             {/* SEPARATOR */}
             <View style={{borderTopWidth : .5, marginVertical : 10, borderTopColor : COLORS.gray}}></View>

             <View style={{flexDirection : 'row'}}>
                 <View style={{flex : 1}}>
                    <Text style={{alignSelf : 'flex-start', ...FONTS.h4}}>
                        Shipped
                    </Text>
                 </View>
                 <View style={{flex : 1}}>
                    <Text style={{alignSelf : 'flex-end', ...FONTS.h4}}>1 Dec, 2020</Text>
                 </View>
             </View>
        </View>
    );
}

const renderItem = () => (
    <Card/>
  );



const OrderHistory = ({navigation, route}) => {

    return (
        <View style={styles.container}>
        <CommonHeader navigation={navigation} title={'My Orders'} route={route} />

        <ScrollView showsVerticalScrollIndicator={false} style={{padding : 10}}>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Card/>
        </ScrollView>
      </View>
    );
};

export default OrderHistory;

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
    cardContainer : {
        backgroundColor : COLORS.white,
        flex : 1,
        borderRadius : 4,
        paddingVertical : 10,
        paddingHorizontal : 10,
        marginBottom : 20
    }
  });