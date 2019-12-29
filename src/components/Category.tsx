import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { categoryType } from '../types'
import { Colors } from '../global/styles'


const Category: React.FC<categoryType> = ({ title, color }) => {
    return (
        <View style={{ ...styles.category, borderColor: color }} >
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        flex: 1,
        borderBottomWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        maxHeight: 90,
        height: 80
    },
    title: {
        fontSize: 13,
    }
})

export default Category
