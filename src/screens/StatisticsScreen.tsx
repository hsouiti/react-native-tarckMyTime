import React from 'react'
import { View, Text } from 'react-native'
import { SCREENS } from '../global/screens'

const StatisticsScreen = () => {
    return (
        <View>
            <Text>Statistics Screen</Text>
        </View>
    )
}

StatisticsScreen.navigationOptions = {
    title: SCREENS.STATISTICS
}

export default StatisticsScreen  
