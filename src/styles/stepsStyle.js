import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './colors';

export const step1Style = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor: '#fff',
    },
    header : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    title : {
        color : '#000',
        fontSize: 28,
        fontWeight: 'bold'
    },
    subTitle : {
        color: colors.greyColor,
        fontSize: 28,
        fontWeight: 'bold'
    },
    inputContainer : {
        flex :3,
        justifyContent: 'center',
        alignItems : 'center',
        marginBottom: 20,
        marginTop: 20
    },
    textStyle : {
        marginBottom: 10,
        fontSize : 20,
        fontWeight: 'bold',
        color: '#000'
    },
});

export const step2Style = StyleSheet.create({
    truckContainer : {
        flex :3,
        width: '100%',
        marginBottom :40
    },
    truckWrapper  : {
        flex :2,
        height :150,
        flexDirection  :'row',
        alignItems: 'center',
        marginTop :10,
        justifyContent: 'space-between',
       
    },
    truckImage1  : {
        height: 64,
        width: 64,
        marginLeft :20,
        marginRight :20
    },
    truckImage2  : {
        height: 64,
        width: 64,
        marginLeft :20,
        marginRight :20
    },
    truckImage3  : {
        height: 64,
        width: 64,
        marginLeft :20,
        marginRight :20,
        marginBottom :20
    },
    info : { 
       flex :1,
       justifyContent : 'center',
       alignItems: 'flex-start'
    },
    checkbox : {
        margin: 10,
        borderColor : colors.themeColor,
        
    }
});

export const step3Style= StyleSheet.create({
    buttonStyle : {
        height: 45,
        width: '70%', 
        marginTop: 10, 
        marginBottom: 30
    }
});