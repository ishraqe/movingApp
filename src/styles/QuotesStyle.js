import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './colors'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor :'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle : {
        marginTop: 10,
        fontSize : 20,
        fontWeight: 'bold',
        color: '#000'
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginHorizontal: 8,
    }
}); 

export default styles;