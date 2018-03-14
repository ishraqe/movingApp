import React, {Component} from 'react';
import {View, Text, Dimensions, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import {Actions } from 'react-native-router-flux';



import {CustomButton} from '../common/index';
import {step1Style} from '../../styles/stepsStyle';
import styles from '../../styles/LoginScreen';
import colors from '../../styles/colors';


const SCREEN_WIDTH = Dimensions.get('window').width;


class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {date:"2016-05-15"}
    }


    render() {
        return (
            <View style={[step1Style.container, {width: SCREEN_WIDTH}]}>
                <View style={step1Style.header}>
                    <Text style={step1Style.textStyle}>Instant Quotes</Text>
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
                    <DatePicker
                        style={styles.inputStyle}
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

                    <TextInput
                        style={styles.inputStyle}
                        placeholder='e.g Sylhet'
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        returnKeyType='next'
                    />
                    
                    <LinearGradient colors={[colors.gradientColor1, colors.gradientColor2]} style={styles.buttonStyle} >
                        <CustomButton
                            style={styles.customButton}
                            textStyle={styles.buttonText}
                            onPress={() => Actions.step2Screen()}
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