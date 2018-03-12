import React, {Component} from 'react';
import {View, Text, Dimensions, TextInput} from 'react-native';
import {CustomButton} from '../common/index';
import {step1Style} from '../../styles/stepsStyle';
import styles from '../../styles/LoginScreen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;


class Step1 extends Component {
    render() {
        return (
            <View style={[step1Style.container, {width: SCREEN_WIDTH}]}>
                <View style={step1Style.header}>
                    <Text style={step1Style.title}>Step 1</Text>
                    <Text style={step1Style.subTitle}>Moving Details</Text>
                </View>
               <View style={step1Style.inputContainer}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='e.g Dhaka'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='e.g Dhaka'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='e.g Dhaka'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                    
                    <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={styles.buttonStyle} >
                        <CustomButton
                            style={styles.customButton}
                            textStyle={styles.buttonText}
                            onPress={() => Actions.welcomeScreen()}
                        >
                            Next
                        </CustomButton>
                    </LinearGradient>
                
               </View>
            </View>
        )
    }
}

export default Step1;