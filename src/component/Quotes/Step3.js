import React, {Component} from 'react';
import {View, Text, Dimensions, TextInput} from 'react-native';
import {CustomButton} from '../common/index';
import {step1Style, step3Style} from '../../styles/stepsStyle';
import styles from '../../styles/LoginScreen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../styles/colors';
import {Actions} from 'react-native-router-flux';
const SCREEN_WIDTH = Dimensions.get('window').width;

class Step3 extends Component {
    render() {
        return (
            <View style={[step1Style.container, {width: SCREEN_WIDTH}]}>
                <View style={step1Style.header}>
                    <Text style={step1Style.title}>Step 3</Text>
                    <Text style={step1Style.subTitle}>Final Step</Text>
                </View>
               <View style={step1Style.inputContainer}>
                    <Text>Do you need any packing help ? </Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='no . of people you need'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                   <Text> or </Text>
                    

                     <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={[styles.buttonStyle, step3Style.buttonStyle]} >
                        <CustomButton
                            style={styles.customButton}
                            textStyle={styles.buttonText}
                            onPress={() => {}}
                            label={'md-checkmark'}

                        >
                           No, i will selfpack 
                        </CustomButton>
                    </LinearGradient>




                    <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={styles.buttonStyle} >
                        <CustomButton
                            style={styles.customButton}
                            textStyle={styles.buttonText}
                            onPress={() => Actions.invoiceScreen()}
                        >
                            Submit
                        </CustomButton>
                    </LinearGradient>
                
               </View>
            </View>
        )
    }
}

export default Step3;