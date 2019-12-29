import React from 'react'
import { Text } from 'react-native'


const DefaultText: React.FC<{ styles?: object }> = ({ children, styles }) => <Text style={{ ...styles }}>{children}</Text>

export default DefaultText
