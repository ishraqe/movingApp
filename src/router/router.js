import React, {Component} from 'react';
import {Router,Stack, Scene, Actions} from 'react-native-router-flux';


import Auth from '../screens/Auth';
import Login from '../screens/login';
import Welcome from '../screens/Welcome';

import Quote from '../screens/Quotes';
import Invoice from '../screens/Invoice';
import UpdateInfo from '../screens/UpdateInfo';

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
                        <Scene 
                            key='invoiceScreen'
                            component={Invoice}
                        />
                        <Scene 
                            key='updateInfoScreen'
                            component={UpdateInfo}
                        />
                    </Stack>
                </Stack>
            </Router>
        )
    }
}

export default RouterComponent;