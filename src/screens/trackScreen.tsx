import React from 'react'
import { View, Text, Button } from 'react-native'
import { SCREENS } from '../global/screens'

const TrackScreen = (props) => {
    return (
        <View>
            <Text>Track Screen</Text>
            <Button title='goto test' onPress={() => props.navigation.navigate('test')} />
        </View>
    )
}

TrackScreen.navigationOptions = {
    headerTitle: SCREENS.TRACK
}


export default TrackScreen 