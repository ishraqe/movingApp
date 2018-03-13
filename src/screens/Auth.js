import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {CustomButton} from '../component/common/index';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/AuthScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';

class Auth extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require('../assets/icon.png')}
                        style={{height: 100, width: 100}} />
                    <Text style={styles.logoHeader}>Moving Company</Text>
                </View>
                <View style={{flex:1}}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.contentStyle}>Please login to track your moving</Text>
                        <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={styles.buttonStyle} >
                            <CustomButton
                                style={styles.customButton}
                                textStyle={styles.buttonText}
                                onPress={() => Actions.login_screen()}
                            >
                                Login
                            </CustomButton>
                        </LinearGradient>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.contentStyle}>Sign up to book and get information</Text>
                        <CustomButton
                            style={styles.buttonStyle}
                            textStyle={styles.alternateButtonText}
                            onPress={()=> Actions.signup_screen()}
                        >
                            Sign Up
                        </CustomButton>
                    </View>
                </View>
            </View>
        );
    }
}

export default Auth;