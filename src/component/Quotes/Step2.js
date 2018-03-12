import React, {Component} from 'react';
import {View, Text, Dimensions, Image, CheckBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {step1Style, step2Style} from '../../styles/stepsStyle';
import styles from '../../styles/LoginScreen';
import colors from '../../styles/colors';
import {CustomButton} from '../common/index';

const SCREEN_WIDTH = Dimensions.get('window').width;


class Step2 extends Component {
    render() {
        return (
            <View style={[step1Style.container, {width: SCREEN_WIDTH}]}>
                <View style={step1Style.header}>
                    <Text style={step1Style.title}>Step 2</Text>
                    <Text style={step1Style.subTitle}>Truck Size</Text>
                </View>
               <View style={step1Style.inputContainer}>
                    <View style={step2Style.truckContainer}>
                        <View style={step2Style.truckWrapper}>
                            <View style={step2Style.imageContainer}>
                                <Image 
                                    source={require('../../assets/truck1.png')}
                                    style={step2Style.truckImage1}
                                />
                            </View>
                            <View style={step2Style.info}>
                                <Text style={colors.black}>Small Truck</Text>
                                <Text style={colors.greyColor}>storage: 2 bedrooms</Text>
                            </View>
                            <CheckBox 
                                style={step2Style.checkbox}
                            />
                        </View>
                        <View style={step2Style.truckWrapper}>
                            <View style={step2Style.imageContainer}>
                                <Image 
                                    source={require('../../assets/truck2.png')}
                                    style={step2Style.truckImage2}
                                />
                            </View>
                            <View style={step2Style.info}>
                                <Text style={colors.black}>Medium Truck</Text>
                                <Text style={colors.greyColor}>storage: 3-4 bedrooms</Text>
                            </View>
                            <CheckBox 
                                style={step2Style.checkbox}
                            />
                        </View>
                        <View style={step2Style.truckWrapper}>
                            <View style={step2Style.imageContainer}>
                                <Image 
                                    source={require('../../assets/truck3.png')}
                                    style={step2Style.truckImage3}
                                />
                            </View>
                            <View style={step2Style.info}>
                                <Text style={colors.black}>Large Truck</Text>
                                <Text style={colors.greyColor}>storage: 4+ bedrooms</Text>
                            </View>
                            <CheckBox 
                                style={step2Style.checkbox}
                            />
                        </View>
                    </View>
                    
                    
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

export default Step2;