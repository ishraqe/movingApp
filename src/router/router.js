import React, {Component} from 'react';
import {Router,Stack, Scene, Actions} from 'react-native-router-flux';


import Auth from '../screens/Auth';
import Login from '../screens/login';
import Welcome from '../screens/Welcome';

import Quote from '../screens/Quotes';

class RouterComponent extends Component {
    render () {
        return (
            <Router >
                <Stack key='root' hideNavBar={true}>
                    <Stack key="first">
                        <Scene
                            initial
                            key='initial_screen'
                            hideNavBar={true}
                            component={Auth}
                        />
                        <Scene
                            key='login_screen'
                            component={Login}
                        />
                    </Stack>
                    <Stack key="main"  >
                        <Scene
                            key='welcomeScreen'
                            component={Welcome}
                            hideNavBar={true}
                        />
                        <Scene 
                            key='quoteScreen'
                            component={Quote}
                        />
                    </Stack>
                </Stack>
            </Router>
        )
    }
}

export default RouterComponent;