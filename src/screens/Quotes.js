import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/QuotesStyle';
import Step from '../component/Quotes/Step';


class Quote extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Instant Quotes</Text>
                <View style={{flex:1}}>
                    <Step />
                </View>
            </View>
        );
    }
}

export default Quote;