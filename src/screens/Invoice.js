import React, {Component} from 'react';
import {View, Text, Image,TextInput, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';

import {CustomButton} from '../component/common';

import colors from '../styles/colors';
import {step1Style} from '../styles/stepsStyle';
import styles from '../styles/LoginScreen';
import invoiceStyles from '../styles/InvoiceStyles'

class Invoice extends Component {

    constructor(props) {
        super(props);
        this.state = {date:"2016-05-15"}
    }

    render() {
        return(
            <ScrollView style={invoiceStyles.container}>
                <View style={invoiceStyles.textContainer}>
                    <Text style={invoiceStyles.ssl}>we have ssl secure payments</Text>
                    <Text style={invoiceStyles.heading}>Pay Invoice</Text>
                    <Text style={invoiceStyles.money}>$2,480</Text>
                    <Text>We accept</Text>
                </View>
                <View style={invoiceStyles.cardContainer}>
                    <Image 
                        source={require('../assets/visa.png')}
                        style={invoiceStyles.card}
                    />
                    <Image 
                        source={require('../assets/american-express.png')}
                        style={invoiceStyles.card}
                    />
                    <Image 
                        source={require('../assets/paypal.png')}
                        style={invoiceStyles.card}
                    />
                </View>
                <View style={[step1Style.inputContainer, {marginBottom: 20}]}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Name (as it appears on your card)'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Card number (no dashes or spaces)'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                    <Text style={invoiceStyles.ex}>Expiration date</Text>
                    <DatePicker
                        style={[styles.inputStyle]}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateTouchBody: {
                                borderRadius: 0

                            },
                            dateIcon: {
                                position: 'absolute',
                                left: 4,
                                top: 4,
                                marginLeft: 0,
                                borderRadius: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderEndWidth: 0,
                                borderTopWidth: 0,
                                borderBottomWidth: 0
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />

                    <Text>Securit code (3 on back, amex:  4 on front)</Text>
                    <TextInput
                        style={[styles.inputStyle, invoiceStyles.code]}
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                    
                    <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={styles.buttonStyle} >
                        <CustomButton
                            style={styles.customButton}
                            textStyle={styles.buttonText}
                        >
                           Pay now
                        </CustomButton>
                    </LinearGradient>
                
               </View>
            </ScrollView>
        );
    }
}

export default Invoice;