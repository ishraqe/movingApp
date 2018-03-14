import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';

import styles from '../styles/AuthScreenStyle';
import { Actions } from 'react-native-router-flux';


class Initial extends Component {

    state = {
        animation : new Animated.Value(-300),
    }

    componentDidMount() {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 1000
        }).start(() =>  {
            setTimeout(() => {
                Actions.auth_screen();
            }, 500);
        });
       
    }

    render () {
        const animatedStyle = {
            transform: [
                { 
                  translateX: this.state.animation
                }
            ]
        };      

        return (
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Animated.Image
                        source={require('../assets/icon.png')}
                        style={[{height: 100, width: 100}, animatedStyle]} />
                    <Text style={styles.logoHeader}>Moving Company</Text>
                </View>
            </View>
        );
    }
}

export default Initial;