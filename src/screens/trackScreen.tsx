import React from 'react'
import { View, Text } from 'react-native'

import { SCREENS } from '../global/screens'
import { globalContainer } from '../global/styles'
import Watch from '../components/Watch'

const TrackScreen = () => {
    return (
        <View style={globalContainer}>
            <Watch />
        </View>
    )
}

TrackScreen.navigationOptions = {
    title: SCREENS.TRACK
}


export default TrackScreen 