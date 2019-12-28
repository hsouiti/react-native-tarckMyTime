import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

import { categoryType } from '../types'
import Category from './Category'
import { CATEGORIES } from '../data/data'
import { globalTitle, Colors, titleWrapper } from '../global/styles'

const Categories = () => {

    const renderItem = ({ item }: { item: categoryType }) => {
        const { id, title, color } = item
        return <Category key={id} id={id} title={title} color={color} />
    }

    return (
        <View style={styles.catgoriesContainer}>
            <View style={titleWrapper}>
                <Text style={globalTitle}>Categories List</Text>
            </View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    catgoriesContainer: {
        flex: 1,
        paddingTop: 8,
        paddingHorizontal: 10,
        backgroundColor: Colors.lightGray
    }
})
export default Categories 
