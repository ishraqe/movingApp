import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './colors'

const WelcomeScreenStyle = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: '#fff'
    },
    welcomeContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText : {
        fontSize : 25,
        fontWeight: 'bold',
        color  :'#000'
    },
    username : {
        fontSize: 18,
        color : '#000'
    },
    optionContainer : {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    options : {
       padding: 20,
       width :'100%',
       flexDirection: 'row',
       paddingBottom : 0,
       paddingTop: 10
    },
    optionsWrapper : {
      width : '45%',
      height: 120,
      margin : 5,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center'
    },
    optionBackGroundColor : {
        backgroundColor: '#eee',
    },
    optionsColor : {
        color : '#000'
    },
    quoteBackgroundColor  :{
        backgroundColor: colors.themeColor,
    },
    invoiceBackColor : {
        backgroundColor: '#000'
    },
    textStyle : {
        color : '#fff',
        fontSize: 16
    },
    logoContainer : {
        flex:1,
        justifyContent :'center',
        alignItems : 'center'
    },
    logoHeader : {
        fontSize: 18,
        color : '#000',
        fontWeight: 'bold'
    }
});

export default WelcomeScreenStyle;