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
        alignItems : 'center'
    }
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
        width: '100%',
        flexDirection  :'row',
        alignItems: 'center',
        marginTop :10,
        justifyContent: 'space-between',
    },
    truckImage1  : {
        height: 48,
        width: 48,
        marginLeft :20,
        marginRight :20
    },
    truckImage2  : {
        height: 60,
        width: 70,
        marginLeft :20,
        marginRight :20
    },
    truckImage3  : {
        height: 70,
        width: 90,
        marginLeft :20,
        marginRight :20,
        marginBottom :20
    },
    info : { 
       flex :1,
       alignItems :'center'
    },
    checkbox : {
        margin: 10,
    }
});