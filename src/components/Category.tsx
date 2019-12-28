import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { categoryType } from '../types'
import { Colors } from '../global/styles'


const Category: React.FC<categoryType> = ({ id, title, color }) => {
    return (
        <View style={{ ...styles.category, borderColor: color }} >
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        flex: 1,
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: Colors.white,
        margin: 10,
    },
    title: {
        fontSize: 16,

    }
})

export default Category
