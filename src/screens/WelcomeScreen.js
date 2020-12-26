import React from 'react';
import { 
    View, 
    Text, 
    StatusBar, 
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Pressable
} from 'react-native';
import { AuthContext } from '../components/context';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import Swiper from 'react-native-swiper'
import * as Animatable from 'react-native-animatable';


const WelcomeScreen = ({navigation}) => {

    const { signIn } = React.useContext(AuthContext);

    const [pageIndex, setpageIndex] = React.useState(0)

    const _onMomentumScrollEnd = (index) => {
        setpageIndex(index)
        console.log(index);
        console.log(pageIndex);
        
    }

    return (
          <Swiper style={styles.wrapper} showsButtons={false} dotColor={'#f9636378'} activeDotColor={COLORS.primary} showsPagination={true} onIndexChanged ={_onMomentumScrollEnd}>
          
          {/* Welcome screen one */}

          <View style={{flex : 1, width : SIZES.width, height : SIZES.height,backgroundColor: '#2b2736'}}>
          <StatusBar animated backgroundColor={COLORS.white} barStyle="light-content" />
          <View style={{alignItems : 'flex-end', paddingTop : 20, paddingRight:20 }}>
              <Pressable onPress={() => navigation.replace('LoginScreen')}>
              <Text style={{...FONTS.h3, color : COLORS.gray}}>SKIP</Text>
              </Pressable>
          </View>
          <Animatable.View animation={'bounceIn'} style={{alignItems : 'center', marginTop : '20%'}}>
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={{
                    width: 150,
                    height: 150
                    }}
                />
          </Animatable.View>
          <View style={{flexDirection : 'row', justifyContent : 'center', paddingTop : '10%'}}>
                <Text style={{...FONTS.largeTitle, color : '#52a9c9'}}>Present</Text>
                <Text style={{...FONTS.largeTitle, color : COLORS.primary}}>ME</Text>
          </View>
          <View style={{alignItems : 'center', padding : '10%'}}>
                <Animatable.Text animation={'slideInRight'} delay={600} style={{...FONTS.body2, color: COLORS.gray}}>
                    Welcome to PresentMe App!
                </Animatable.Text>
                <Animatable.Text animation={'slideInLeft'} delay={600} style={{...FONTS.body2, color: COLORS.gray}}>
                    Swipe left to see what we do.
                </Animatable.Text>
          </View>

          
          <View style={{flexDirection : 'row', justifyContent : 'center', paddingTop : '10%'}}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={()=>navigation.navigate('SignUpScreen')}>
                <Text style={[styles.appButtonText, {color : COLORS.black}]}>SIGNUP</Text>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', paddingHorizontal : '15%', marginTop : '5%'}}>
              <View style={{flex : 4, alignItems : 'flex-start'}}>
                    <Text style={{...FONTS.body3, color: COLORS.gray}}>
                        Already have an account ?
                    </Text>
              </View>
              <View style={{flex : 1, alignItems : 'flex-end'}}>
                  <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{...FONTS.body3, color: COLORS.gray, fontWeight : 'bold'  }}>
                        LOGIN
                    </Text>
                  </Pressable>
              </View>
          </View>
          </View>


          {/* Welcome screen Two */}

          <View style={{flex : 1, width : SIZES.width, height : SIZES.height, backgroundColor : COLORS.white}}>
          <StatusBar animated backgroundColor={COLORS.white} barStyle='dark-content' />
          <View style={{alignItems : 'flex-end', paddingTop : 20, paddingRight:20}}>
            <Pressable onPress={() => navigation.replace('LoginScreen')}>
              <Text style={{...FONTS.h3, color : COLORS.black}}>SKIP </Text>
            </Pressable>
          </View>
          <Animatable.View iterationCount={ pageIndex === 1 ? 0 : 'infinite'} animation={'bounce'} style={{alignItems : 'center', marginTop : '20%'}}>
                <Image
                    source={images.welcomebanner1}
                    resizeMode="contain"
                    style={{
                    width: 250,
                    height: 250
                    }}
                />
          </Animatable.View>
          {/* <View style={{flexDirection : 'row', justifyContent : 'center', paddingTop : '10%'}}>
                <Text style={{...FONTS.largeTitle, color : '#52a9c9'}}>Present</Text>
                <Text style={{...FONTS.largeTitle, color : COLORS.primary}}>ME</Text>
          </View> */}
          <View style={{alignItems : 'center', padding : '10%'}}>
                <Text style={{...FONTS.body2, color: COLORS.black}}>
                    Gifting your loved ones,
                </Text>
                <Text style={{...FONTS.body2, color: COLORS.black}}>
                    now made easy!
                </Text>
          </View>


          <View style={{flexDirection : 'row', justifyContent : 'center', paddingTop : '10%'}}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={()=>navigation.navigate('SignUpScreen')}>
                <Text style={styles.appButtonText}>SIGNUP</Text>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', paddingHorizontal : '15%', marginTop : '5%'}}>
              <View style={{flex : 4, alignItems : 'flex-start'}}>
                    <Text style={{...FONTS.body3, color: COLORS.black}}>
                        Already have an account ?
                    </Text>
              </View>
              <View style={{flex : 1, alignItems : 'flex-end'}}>
                  <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{...FONTS.body3, color: COLORS.black, fontWeight : 'bold'  }}>
                        LOGIN
                    </Text>
                  </Pressable>
              </View>
          </View>
          </View>





           {/* Welcome screen Three */}


           <View style={{flex : 1, width : SIZES.width, height : SIZES.height, backgroundColor : COLORS.white}}>
          <StatusBar animated backgroundColor={COLORS.white} barStyle='dark-content' />
          <View style={{alignItems : 'flex-end', paddingTop : 20, paddingRight:20}}>
              <Pressable onPress={() => navigation.replace('LoginScreen')}>
              <Text style={{...FONTS.h3, color : COLORS.black}}>SKIP</Text>
              </Pressable>
          </View>
          <Animatable.View iterationCount={ pageIndex === 2 ? 0 : 'infinite'} animation={'fadeInUp'} style={{alignItems : 'center', marginTop : '20%'}}>
                <Image
                    source={images.welcomebanner2}
                    resizeMode="contain"
                    style={{
                    width: 250,
                    height: 250
                    }}
                />
          </Animatable.View>
          <View style={{alignItems : 'center', padding : '10%'}}>
                <Text style={{...FONTS.body2, color: COLORS.black}}>
                    A large Vendor Network, to
                </Text>
                <Text style={{...FONTS.body2, color: COLORS.black}}>
                    cater to all gifting needs
                </Text>
          </View>
          <View style={{flexDirection : 'row', justifyContent : 'center', paddingTop : '10%'}}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={()=>navigation.navigate('SignUpScreen')}>
                <Text style={styles.appButtonText}>SIGNUP</Text>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', paddingHorizontal : '15%', marginTop : '5%'}}>
              <View style={{flex : 4, alignItems : 'flex-start'}}>
                    <Text style={{...FONTS.body3, color: COLORS.black}}>
                        Already have an account ?
                    </Text>
              </View>
              <View style={{flex : 1, alignItems : 'flex-end'}}>
                  <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{...FONTS.body3, color: COLORS.black, fontWeight : 'bold'  }}>
                        LOGIN
                    </Text>
                  </Pressable>
              </View>
          </View>
          </View>
          </Swiper>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#4ca9c8",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width : '70%'
      },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default WelcomeScreen;

