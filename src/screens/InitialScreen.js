import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';

import styles from '../styles/AuthScreenStyle';


class Initial extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require('../assets/icon.png')}
                        style={{height: 100, width: 100}} />
                    <Text style={styles.logoHeader}>Moving Company</Text>
                </View>
            </View>
        );
    }
}

export default Initial;