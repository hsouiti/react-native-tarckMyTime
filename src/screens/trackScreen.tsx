import React from 'react'
import { View, Text } from 'react-native'

import { SCREENS } from '../global/screens'


const TrackScreen = () => {
    return (
        <View>
            <Text>Track Screen</Text>
        </View>
    )
}

TrackScreen.navigationOptions = {
    title: SCREENS.TRACK
}


export default TrackScreen 