import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import styles from '../styles/WelcomeScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const ICONSIZE= 40;

class WelcomeScreen extends  Component {
    state = {
        view1 : new Animated.Value( -400),
        view2 : new Animated.Value(800),
    }

    componentDidMount() {
        Animated.spring(this.state.view1, {
            toValue: 0, 
            duration: 300
        }).start();
        Animated.spring(this.state.view2, {
            toValue: 0, 
            duration: 300
        }).start();
       
    }
    render () {
        const view1Style = {
            transform: [
                { 
                  translateX: this.state.view1
                }
            ]
        };
        const view2Style = {
            transform: [
                { 
                  translateX: this.state.view2
                }
            ]
        };
        return (
              <View style={styles.container}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={styles.username}>Ishraqe</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <Text>Please select an option</Text>
                        <View style={styles.options}>
                            <Animated.View  style={[styles.optionsWrapper,styles.quoteBackgroundColor, view1Style]}>
                                <TouchableOpacity 
                                    style={styles.justify}
                                    onPress={() => Actions.step1Screen()}
                                >
                                        <MaterialIcon
                                            name={'note-add'}
                                            size={ICONSIZE}
                                            color={'#fff'}
                                        />
                                        <Text style={styles.textStyle}>Instant Quote</Text>
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View  style={[styles.optionsWrapper,styles.invoiceBackColor, view2Style]}>
                                <TouchableOpacity 
                                    onPress={() => Actions.invoiceScreen()}
                                    style={styles.justify}
                                >
                                        <Ionicon
                                            name={'ios-alert-outline'}
                                            size={ICONSIZE}
                                            color={'#fff'}
                                        />
                                        <Text style={styles.textStyle}>Pay Invoice</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                        <View style={styles.options}>
                            <Animated.View
                                style={[styles.optionsWrapper,styles.optionBackGroundColor, view1Style]}
                                
                            >
                                <TouchableOpacity 
                                    onPress= {()=>  Actions.trackJobScreen()}
                                    style={styles.justify}
                                >
                                        <Ionicon
                                            name={'ios-car'}
                                            size={ICONSIZE}
                                            color={'#000'}
                                        />
                                        <Text style={[styles.textStyle, styles.optionsColor]}>Track Job</Text>
                                </TouchableOpacity>
                            </Animated.View>
                           <Animated.View
                                style={[styles.optionsWrapper,styles.optionBackGroundColor, view2Style]}
                           >
                            <TouchableOpacity 
                                    onPress={()=> Actions.updateInfoScreen()}
                                    style={styles.justify}
                                >
                                        <MaterialIcon
                                            name={'update'}
                                            size={ICONSIZE}
                                            color={'#000'}
                                        />
                                        <Text style={[styles.textStyle, styles.optionsColor]}>Update Info</Text>
                                </TouchableOpacity>
                           </Animated.View>
                        </View>
                    </View>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../assets/icon.png')}
                            style={{height: 50, width: 50}} />
                        <Text style={styles.logoHeader}>Moving Company</Text>
                    </View>
              </View>
        );
    }
}

export default WelcomeScreen;