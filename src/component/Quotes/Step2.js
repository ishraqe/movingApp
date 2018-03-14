import React, {Component} from 'react';
import {View, Text, Dimensions, Image, CheckBox, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import {step1Style, step2Style} from '../../styles/stepsStyle';
import styles from '../../styles/LoginScreen';
import colors from '../../styles/colors';
import {CustomButton} from '../common/index';

const SCREEN_WIDTH = Dimensions.get('window').width;


class Step2 extends Component {
    state = {
        truck1 : new Animated.Value(-400),
        truck2 : new Animated.Value(-400),
        truck3 : new Animated.Value(-400),
    
    }

    componentDidMount() {
        Animated.timing(this.state.truck1, {
            toValue: 0,
            duration: 300
        }).start(() =>  {
            Animated.timing(this.state.truck2, {
                toValue: 0,
                duration: 400
            }).start(()=> {
                Animated.timing(this.state.truck3, {
                    toValue: 0,
                    duration: 500
                }).start();
            });
        });
       
    }
    render() {
        const truck1Style = {
            transform: [
                { 
                  translateX: this.state.truck1
                }
            ]
        }; 
        const truck2Style = {
            transform: [
                { 
                  translateX: this.state.truck2
                }
            ]
        }; 
        const truck3Style = {
            transform: [
                { 
                  translateX: this.state.truck3
                }
            ]
        }; 
        return (
            <View style={[step1Style.container, {width: SCREEN_WIDTH}]}>
                <View style={step1Style.header}>
                    <Text style={step1Style.textStyle}>Instant Quotes</Text>
                    <Text style={step1Style.title}>Step 2</Text>
                    <Text style={step1Style.subTitle}>Truck Size</Text>
                </View>
               <View style={step1Style.inputContainer}>
                    <View style={step2Style.truckContainer}>
                        <Animated.View style={[step2Style.truckWrapper, truck1Style]}>
                            <View style={step2Style.imageContainer}>
                                <Image 
                                    source={require('../../assets/truck1.png')}
                                    style={step2Style.truckImage1}
                                />
                            </View>
                            <View style={step2Style.info}>
                                <Text style={{color: colors.black}}>Small Truck</Text>
                                <Text style={{color: colors.greyColor}}>storage: 2 bedrooms</Text>
                            </View>
                            <CheckBox 
                                style={step2Style.checkbox}
                            />
                        </Animated.View>
                        <Animated.View style={[step2Style.truckWrapper, truck2Style]}>
                            <View style={step2Style.imageContainer}>
                                <Image 
                                    source={require('../../assets/truck2.png')}
                                    style={step2Style.truckImage2}
                                />
                            </View>
                            <View style={step2Style.info}>
                                <Text style={{color: colors.black}}>Medium Truck</Text>
                                <Text style={{color: colors.greyColor}}>storage: 3-4 bedrooms</Text>
                            </View>
                            <CheckBox 
                                style={step2Style.checkbox}
                            />
                        </Animated.View>
                        <Animated.View style={[step2Style.truckWrapper, truck3Style]}>
                            <View style={step2Style.imageContainer}>
                                <Image 
                                    source={require('../../assets/truck3.png')}
                                    style={step2Style.truckImage3}
                                />
                            </View>
                            <View style={step2Style.info}>
                                <Text style={{color: colors.black}}>Large Truck</Text>
                                <Text style={{color: colors.greyColor}}>storage: 4+ bedrooms</Text>
                            </View>
                            <CheckBox 
                                style={step2Style.checkbox}
                            />
                        </Animated.View>
                    </View>
                    
                    
                    <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={styles.buttonStyle} >
                        <CustomButton
                            style={styles.customButton}
                            textStyle={styles.buttonText}
                            onPress={() => Actions.step3Screen()}
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