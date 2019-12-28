import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';



import { Colors, input } from '../global/styles'


const { width, height }: { width: number, height: number } = Dimensions.get('screen')

const Watch = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={'ios-timer'} size={30} color={Colors.white} />
                <Text style={styles.title}>Track your activity</Text>
            </View>
            <View style={styles.tracking}>
                <View style={styles.category}>
                    <TextInput style={input} placeholder='Choose Catgeory...' />
                </View>
                <View style={styles.timer}>
                    <Text style={styles.time}>08:05:22</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('start')}
                    >
                        <Icon name='ios-play' size={40} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.wrapperDetails}>
                <View style={styles.details}>
                    <Text style={styles.item}>Start At : </Text>
                    <Text style={styles.item}>End At : </Text>
                    <Text style={styles.item}>Category : </Text>
                    <Text style={styles.item}>Title : </Text>
                    <Text style={styles.item}>Time : </Text>
                </View>

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        paddingTop: 5
    },
    title: {
        color: Colors.white,
        marginLeft: 10,
        fontSize: 18
    },
    tracking: {
        height: (height / 3) - 20,
        width: '100%',
        position: 'relative',
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    timer: {
        height: 100,
    },
    time: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: Colors.white
    },
    buttons: {
        position: 'absolute',
        backgroundColor: Colors.white,
        height: 100,
        width: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: -40,
        left: (width / 2) - 50,
        zIndex: 2,
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        marginHorizontal: 10,
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
    },
    action: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Colors.white,
    },
    wrapperDetails: {
        backgroundColor: Colors.white,
        width: '100%',
        paddingTop: 10,
        zIndex: 1,
    },
    details: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    item: {
        paddingVertical: 5,
        fontSize: 18,
    }


})

export default Watch
