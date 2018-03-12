import React from 'react';
import { View,Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const CustomButton = (props) => {
    const { buttonStyle, textStyle, } = styles;
    const label = props.label;
    
    const content = (
        <View style={[buttonStyle, props.style]}>
            <Text style={[textStyle, props.textStyle]}>
                {props.children}
            </Text>
        </View>
    );
    if(label) {
        return (
            <View style={[buttonStyle, props.style, {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -5}]}>
                <Text style={[textStyle, props.textStyle]}>
                    {props.children}
                </Text>
                <Icon 
                    name={label}
                    size={50}
                    style={styles.iconStyle}
                />
            </View>
        );
    } 
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
    iconStyle : {
        color : '#fff',
        marginLeft: 30,
    }

};

export { CustomButton };