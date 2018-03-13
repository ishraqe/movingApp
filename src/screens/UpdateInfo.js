import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {CustomButton} from '../component/common';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import {Actions} from "react-native-router-flux";
import styles from '../styles/LoginScreen';

class UpdateInfo extends Component {
    render () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Update</Text>
                    <Text style={styles.subTitle}>Please edit the fields you want to update</Text>
                </View>
               <View style={styles.inputContainer}>
                   <TextInput
                        style={styles.inputStyle}
                        placeholder='Ishraqe'
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
                        placeholder='56658990'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        keyboardType='numeric'
                        returnKeyType='next'
                   />
                   <TextInput
                        style={styles.inputStyle}
                        placeholder='Melbourne'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
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
                            Update
                        </CustomButton>
                    </LinearGradient>
                </View>
            </ScrollView>
        );
    }
}


export default UpdateInfo;