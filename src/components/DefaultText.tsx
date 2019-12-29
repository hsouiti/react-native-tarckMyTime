import React from 'react'
import { View, Text, TextStyle } from 'react-native'

const DefaultText: React.FC = (props) => {
    return <Text style={{ ...props.data }}>{props.children}</Text>

}

export default DefaultText
