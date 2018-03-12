import React, {Component} from 'react';
import {View} from 'react-native';
import Router from './router/router';

class App extends Component {
    render () {
        return (
            <View style={{width: '100%', height: '100%'}}>
                <Router />
            </View>
        );
    }
}


export default App;