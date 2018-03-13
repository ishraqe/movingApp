import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container : {
        flex :1, 
        backgroundColor: '#fff',
    },
    textContainer:  {
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10
    },
    ssl : {
        color: colors.black
    },
    heading : {
        fontSize: 28, 
        color : colors.black,
        fontWeight: 'bold',
    },
    money : {
        color: colors.gray,
        fontSize: 28, 
        fontWeight: 'bold',
    },
    cardContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card : {
        height: 40, 
        width: 40, 
        marginLeft: 10, 
        marginRight: 10
    },
    ex : {
        color: colors.black,
        justifyContent: 'flex-start'
    },
    code : {
        width: '50%',
        height: 40
    }
});

export default styles;