import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useSegments } from 'expo-router';
import { Order } from '@/types';


const OrderItem = ({ order }: { order: Order }) => {
    const segment = useSegments()[0];

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.left}>
                <Text style={styles.text}>Order: #{order.id}</Text>
                <Text style={styles.subtext}>Created: {new Date(order.created_at).toLocaleString()}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.subtext}>Status:</Text>
                <Text style={styles.text}>{order.status}</Text>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161622',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    subtext: {
        color: 'grey',
        fontSize: 13,
    },
    left: {
    },
    right: {
    },
})