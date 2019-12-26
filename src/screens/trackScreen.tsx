import React from 'react'
import { View, Text } from 'react-native'
import {NavigationScreenComponent} from 'react-navigation'

import { SCREENS } from '../global/screens'


const TrackScreen = () => {
    return (
        <View>
            <Text>Track Screen</Text>
        </View>
    )
}

TrackScreen.navigationOptions = {
    headerTitle: SCREENS.TRACK
}


export default TrackScreen 