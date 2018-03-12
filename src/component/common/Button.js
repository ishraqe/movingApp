import React from 'react';
import { View,Text, TouchableNativeFeedback } from 'react-native';

const CustomButton = (props) => {
    const { buttonStyle, textStyle, } = styles;
    const content = (
        <View style={[buttonStyle, props.style]}>
            <Text style={[textStyle, props.textStyle]}>
                {props.children}
            </Text>
        </View>
    );

    return (
        <TouchableNativeFeedback onPress={props.onPress} >
            {content}
        </TouchableNativeFeedback>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#2ecc71',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        width: '50%',
        borderRadius: 20,
    },

};

export { CustomButton };