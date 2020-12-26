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
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { CommonHeader } from './index';


import { AuthContext } from '../components/context';
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
            <Text style={{...FONTS.h3, fontWeight : 'bold'}}>Lucifer Morningstar</Text>
            <Text style={{...FONTS.body4}}>144 RR plot West bengal, Kolkata, 700001 India</Text>
            <Text style={{...FONTS.body4}}>+91 1234-5678</Text>
        </View>
    );
}

const renderItem = () => (
    <Card/>
  );



const EditaddressScreen = ({navigation, route}) => {

    return (
        <View style={styles.container}>
         <View style={{flexDirection : 'row'}}>
                <View style={{flex : 4}}>
                    <CommonHeader navigation={navigation} title={'My Address'} route={route} />
                </View>
                <View style={{flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : COLORS.primary, height : 60}}>
                    <Pressable onPress={() => navigation.navigate('NewAddress')}>
                        <Image
                        source={icons.plus}
                        resizeMode='contain'
                        style={{
                            width : 20,
                            tintColor : COLORS.white
                        }}
                        />
                    </Pressable>
                </View>
            </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{padding : 20}}>
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

export default EditaddressScreen;

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
    },
    cardContainer : {
        backgroundColor : COLORS.white,
        flex : 1,
        borderRadius : 5,
        paddingVertical : 10,
        paddingHorizontal : 10,
        marginBottom : 20
    }
  });