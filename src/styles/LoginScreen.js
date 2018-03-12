import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './colors'

const LoginStyles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff'
    },
    textContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
      fontSize : 23,
      fontWeight: 'bold',
      color : '#000'
    },
    subTitle : {
        fontSize: 16,
        color : '#9fa1a5'
    },
    inputContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle : {
        width : '70%',
        borderRadius: 40,
        borderWidth: 1,
        borderColor : colors.themeColor,
        marginTop: 15,
        marginBottom: 15
    },
    buttonContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        borderRadius: 30,
        width: '90%',
        borderColor : 'transparent'
    },
    buttonText : {
        color: '#fff',
        fontSize : 20,
        fontWeight: 'bold'
    },
    customButton : {width: '100%', backgroundColor: 'transparent', borderColor: 'transparent'}
});

export default LoginStyles;