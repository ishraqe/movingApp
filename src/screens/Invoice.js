import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/InvoiceStyles'

class Invoice extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>we have ssl secure payments</Text>
                <Text>Pay Invoice</Text>
                <Text>$2,480</Text>
                <Text>We accept</Text>
                <View>
                    <Image 
                        source={require('../assets/visa.png')}
                        style={{height: 40, width: 40}}
                    />
                </View>
            </View>
        );
    }
}

export default Invoice;