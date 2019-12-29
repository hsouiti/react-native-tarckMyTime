import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { categoryType } from '../types'
import { Colors } from '../global/styles'


const Category: React.FC<categoryType> = ({ title, color }) => {
    return (
        <TouchableOpacity
            onPress={() => console.log(title)}
        >
            <View style={{ ...styles.category, borderColor: color, ...styles.active }} >
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
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
    },
    active: {
        backgroundColor: 'red'
    }
})

export default Category
