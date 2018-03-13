import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView, { Marker}  from 'react-native-maps';

import styles from '../styles/TrackJobStyle';
import colors from '../styles/colors';


class TrackJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region : {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            markers : [
                {
                    latlng : {
                        latitude: 37.78825,
                        longitude:  -122.4324
                    },
                    title : 'Moving From',
                    description : 'description',
                    image : require('../assets/truck1.png') 
                },
                {
                    latlng : {
                        latitude: 37.785121,
                        longitude: -122.418482
                    },
                    title : 'Trucks position',
                    description : 'description',
                    image : require('../assets/marker.png')
                },
                {
                    latlng : {
                        latitude: 37.7939904,
                        longitude:  -122.4424421
                    },
                    title : 'Moving To',
                    description : 'description',
                    image : require('../assets/markerdes.png')
                },

            ]
        }
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You can view your moving status here</Text>
                <Text style={styles.heading}>Track</Text>
                <Text style={styles.sub}>Your move</Text>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={this.state.region}
                       
                        loadingEnabled={true}
                    >
                        {this.state.markers.map((marker , index)=> (
                            <Marker
                                key={index}
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                                image={marker.image}
                            />
                        ))}
                    </MapView>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.moving}>moving from</Text>
                    <Text style={styles.from}>35 Rosadale Avenue, Burwood VIC 3000</Text>
                    <Text style={styles.moving}>moving to</Text>
                    <Text style={styles.to}>4 new Cresent Road, Adelaide 4500</Text>
                </View>
                <View style={styles.estimationContainer}>
                    <Text style={[styles.to, {color: colors.black}]}>Estimated time completion</Text>
                    <View style={styles.estimationWrapper}>
                        <View style={styles.box}><Text style={styles.boxText}>3 day 5 hours</Text></View>
                        <View style={[styles.box, {backgroundColor: colors.themeColor}]}><Text style={styles.boxText}>14/05/2018</Text></View>
                    </View>
                </View>
            </View>
        );
    }
}


export default TrackJob;