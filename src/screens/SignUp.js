import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import {CustomButton} from '../component/common';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import {Actions} from "react-native-router-flux";
import styles from '../styles/LoginScreen';

class SignUp extends Component {
    render () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.subTitle}>Please fill all the fields to get registered</Text>
                </View>
               <KeyboardAvoidingView 
                    behavior='padding'
                    style={styles.inputContainer}>
                   <TextInput
                        style={styles.inputStyle}
                        placeholder='full name'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                   />
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
                        placeholder='phone number'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        keyboardType='numeric'
                        returnKeyType='next'
                   />
                   <TextInput
                       style={styles.inputStyle}
                       placeholder='City'
                   />
                   <Text style={{color: colors.black}}>Your Password will be sent to your email address</Text>
               </KeyboardAvoidingView>
                <View style={[styles.buttonContainer, {marginTop: 40}]}>
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
            </ScrollView>
        );
    }
}


export default SignUp;