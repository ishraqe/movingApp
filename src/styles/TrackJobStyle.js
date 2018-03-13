import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text : {
        color: colors.black,
        marginTop: 10
    },
    heading : {
        marginTop: 5,
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 25
    },
    sub: {
        color: colors.gray,
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 5
    },
    mapContainer  : {
        width: '85%',
        height: 180,
        borderWidth: 1,
        borderColor: colors.black,
        marginTop :10
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    infoContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    moving: {
        color :colors.gray,
        marginTop: 5
    },
    from : {
        color: colors.black,
        fontSize: 16,
        marginTop: 2
    },
    to : {
        color: colors.themeColor,
        fontSize: 16,
        marginTop: 2
    },
    estimationContainer  : {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    estimationWrapper : {
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    box:  {
        marginTop: 10,
        backgroundColor: colors.gray,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 12,
        padding :10,
        marginLeft :5, marginRight: 5
    },
    boxText : {
        color :'#fff',
        fontWeight: 'bold'
    }
});

export default styles;