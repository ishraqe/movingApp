import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {CustomButton} from '../component/common';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import {Actions} from "react-native-router-flux";
import styles from '../styles/LoginScreen';

class Login extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subTitle}>Please login to view job status and track</Text>
                </View>
               <View style={styles.inputContainer}>
                   <TextInput
                        style={styles.inputStyle}
                        placeholder='E-mail address'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType='next'
                   />
                   <TextInput
                       style={styles.inputStyle}
                       placeholder='Password'
                   />
               </View>
                <View style={styles.buttonContainer}>
                    <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={styles.buttonStyle} >
                        <CustomButton
                            style={styles.customButton}
                            textStyle={styles.buttonText}
                            onPress={() => Actions.welcomeScreen()}
                        >
                            Login
                        </CustomButton>
                    </LinearGradient>
                </View>
            </View>
        );
    }
}


export default Login;