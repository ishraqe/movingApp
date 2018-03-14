import React, {Component} from 'react';
import {Router,Stack, Scene, Actions} from 'react-native-router-flux';

import Initial from '../screens/InitialScreen';
import Auth from '../screens/Auth';
import Login from '../screens/login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';


import Invoice from '../screens/Invoice';
import UpdateInfo from '../screens/UpdateInfo';
import TrackJob from '../screens/TrackJob';

import Step1 from '../component/Quotes/Step1';
import Step2 from '../component/Quotes/Step2';
import Step3 from '../component/Quotes/Step3';


class RouterComponent extends Component {
    render () {
        return (
            <Router >
                <Stack key='root' hideNavBar={true} navigationBarStyle={{ shadowColor: '#fff', elevation: 0 }}>
                    <Stack key="first">
                        <Scene
                            initial
                            key='initial_screen'
                            hideNavBar={true}
                            component={Initial}
                        />
                        <Scene
                            
                            key='auth_screen'
                            hideNavBar={true}
                            component={Auth}
                        />
                        <Scene
                            key='login_screen'
                            component={Login}
                        />
                        <Scene
                            key='signup_screen'
                            component={SignUp}
                        />
                    </Stack>
                    <Stack key="main" >
                        <Scene
                            key='welcomeScreen'
                            component={Welcome}
                            hideNavBar={true}
                        />
                        <Scene 
                            key='invoiceScreen'
                            component={Invoice}
                        />
                        <Scene 
                            key='updateInfoScreen'
                            component={UpdateInfo}
                        />
                        <Scene 
                            key='trackJobScreen'
                            component={TrackJob}
                        />
                        <Scene 
                            key='step1Screen'
                            component={Step1}
                        />
                        <Scene 
                            key='step2Screen'
                            component={Step2}
                        />
                        <Scene 
                            key='step3Screen'
                            component={Step3}
                        />
                    </Stack>
                </Stack>
            </Router>
        )
    }
}

export default RouterComponent;