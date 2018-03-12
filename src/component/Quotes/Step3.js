import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;


class Step3 extends Component {
    render() {
        return (
            <View style={{width: SCREEN_WIDTH}}>
                <Text>Step 3 </Text>
            </View>
        )
    }
}

export default Step3;