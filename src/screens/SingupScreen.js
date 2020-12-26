import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

const SignupScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: 'male' ,
        perfection : '',
        age : '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                fname: val,
                check_textInputChange: true
            });                                         
        } else {
            setData({
                ...data,
                lname: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }


    const registerHandle = () => {
        console.log(data);
        if ( data.fname == '' || data.lname == '' || data.email == '' || data.age == '' || data.gender == '' || data.password == '' || data.confirmPassword == '' || data.perfection == '' ) {
            Alert.alert('Wrong Input!', 'Any fields cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch("http://103.145.50.200:4000/api/user/register", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                
                if (result.success) {
                    Alert.alert('Wow!', result.message, ['Ok']);
                    navigation.replace('LoginScreen');
                } else {
                    Alert.alert('Oops!', result.message, ['Ok']);
                }
            },
            (error) => {
            
            }
        )

    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#4ca9c8' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text_footer}>First Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your First Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>


            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Last Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Last Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({
                        ...data,
                        lname : val
                    })}
                />
            </View>

            
            
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Email</Text>
            <View style={styles.action}>
                <Feather 
                    name="mail"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({
                        ...data,
                        email : val
                    })}
                />
            </View>


            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Phone</Text>
            <View style={styles.action}>
                <Feather 
                    name="phone"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your phone number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({
                        ...data,
                        phone : val
                    })}
                />
            </View>



            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>


            
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Gender</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="intersex"
                    color="#05375a"
                    size={20}
                />
                <Picker
                selectedValue={data.gender}
                itemStyle = {{fontWeight:"bold",color:"#ff0000"}}
                style={styles.textInput}
                onValueChange={(itemValue, itemIndex) =>
                   setData({
                       ...data,
                       gender : itemValue
                   })
                }>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                </Picker>
                
            </View>

            
            
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Profession</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="certificate"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your profession"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({
                        ...data,
                        perfection : val
                    })}
                />
            </View>


            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Gender</Text>
            <View style={styles.action}>
                <Feather 
                    name="calendar"
                    color="#05375a"
                    size={20}
                />
                <Picker
                selectedValue={data.age}
                style={styles.textInput}
                onValueChange={(itemValue, itemIndex) =>
                    setData({
                        ...data,
                        age: itemValue
                    })
                }>
                <Picker.Item value="Age between 5-10"  label="Age between 5-10"  />
                <Picker.Item value="Age between 10-15" label="Age between 10-15"/>
                <Picker.Item value="Age between 15-20" label="Age between 15-20"/>
                <Picker.Item value="Age between 20-25" label="Age between 20-25"/>
                <Picker.Item value="Age between 25-30" label="Age between 25-30"/>
                <Picker.Item value="Age between 30-35" label="Age between 30-35"/>
                <Picker.Item value="Age between 35-40" label="Age between 35-40"/>
                <Picker.Item value="Age between 40-45" label="Age between 40-45"/>
                <Picker.Item value="Age between 45-50" label="Age between 45-50"/>
                <Picker.Item value="Age between 55-60" label="Age between 55-60"/>
                <Picker.Item value="Age between 65-70" label="Age between 65-70"/>
                <Picker.Item value="Age between 70-75" label="Age between 70-75"/>
                <Picker.Item value="Age between 75-80" label="Age between 75-80"/>
                <Picker.Item value="Age between 80-85" label="Age between 80-85"/>
                <Picker.Item value="Age between 85-90" label="Age between 85-90"/>
                </Picker>
                
            </View>


            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={()=>registerHandle()}>
                <Text style={styles.appButtonText}>
                    SIGNUP
                </Text>
            </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.replace('LoginScreen')}
                    style={[styles.signIn, {
                        borderColor: '#4ca9c8',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#4ca9c8'
                    }]}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#4ca9c8'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#4ca9c8",
        borderRadius: 10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
  });