import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './colors';

const AuthStyle = StyleSheet.create({
    container : {
        flex : 1,
    },
    buttonContainer : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    buttonStyle: {
        borderRadius: 30,
        width: '90%',
        borderColor : 'transparent'
    },
    buttonText : {
        color: '#fff'
    },
    alternateButtonText :{
      color : colors.themeColor
    },
    textStyle : {
        color : '#fff'
    },
    contentStyle : {
        marginBottom: 10,
        marginTop: 10,
        fontSize : 15,
        color: '#000'
    },
    logoHeader : {
        fontSize: 25,
        color : '#000',
        fontFamily: 'Timmana-Regular'
    },
    customButton : {width: '100%', backgroundColor: 'transparent', borderColor: 'transparent'}
});

export default AuthStyle;
