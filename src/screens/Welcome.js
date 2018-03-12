import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/WelcomeScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const ICONSIZE= 40;

class WelcomeScreen extends  Component {
    render () {
        return (
              <View style={styles.container}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={styles.username}>Ishraqe</Text>
                    </View>
                    <View style={styles.optionContainer}>
                        <Text>Please select an option</Text>
                        <View style={styles.options}>
                            <TouchableOpacity 
                                style={[styles.optionsWrapper,styles.quoteBackgroundColor]}
                                onPress={() => Actions.quoteScreen()}
                            >
                                    <MaterialIcon
                                        name={'note-add'}
                                        size={ICONSIZE}
                                        color={'#fff'}
                                    />
                                    <Text style={styles.textStyle}>Instant Quote</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.optionsWrapper,styles.invoiceBackColor]}>
                                    <Ionicon
                                        name={'ios-alert-outline'}
                                        size={ICONSIZE}
                                        color={'#fff'}
                                    />
                                    <Text style={styles.textStyle}>Pay Invoice</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.options}>
                            <TouchableOpacity style={[styles.optionsWrapper,styles.optionBackGroundColor]}>
                                    <Ionicon
                                        name={'ios-car'}
                                        size={ICONSIZE}
                                        color={'#000'}
                                    />
                                    <Text style={[styles.textStyle, styles.optionsColor]}>Track Job</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.optionsWrapper,styles.optionBackGroundColor]}>
                                    <MaterialIcon
                                        name={'update'}
                                        size={ICONSIZE}
                                        color={'#000'}
                                    />
                                    <Text style={[styles.textStyle, styles.optionsColor]}>Update Info</Text>
                            </TouchableOpacity>
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