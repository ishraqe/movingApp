import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel,{ Pagination }  from 'react-native-snap-carousel';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import styles from '../../styles/QuotesStyle';
import colors from '../../styles/colors';

export const sliderWidth = Dimensions.get('window').width;
export const itemWidth = Dimensions.get('window').width;
const SLIDER_1_FIRST_ITEM = 1;

class Step extends Component {
    state  = {
        entries : [
            {step: 1, title  :1},
            {step: 2, title  :2},
            {step: 3,title  :3}           
        ],
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    }

    _renderItem ({item, index}) {
        if(item.step === 1) {
            return <Step1 /> ;
        }else if(item.step === 2) {
            return <Step2 /> ;
        }else if (item.step === 3) {
            return <Step3 /> ;
        }
        
    }

    render () {
        return (
            <View style={{flex:1, backgroundColor: '#fff'}} >
                <Carousel
                    layout={'default'} layoutCardOffset={`0`}
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    enableSnap={true}
                    scrollEnabled={true}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={this.state.entries.length}
                  activeDotIndex={this.state.slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'#000'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._carousel}
                  tappableDots={!!this._carousel}
                />
            </View>
        );
    }
}

export default Step;