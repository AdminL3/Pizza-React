import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack, useSegments } from 'expo-router';
import { Order } from '@/types';


const OrderItem = ({ order }: { order: Order }) => {
    const getTimeSinceOrder = (created_at: string) => {
        const now = new Date().getTime();
        const orderTime = new Date(created_at).getTime();
        const timeDifference = now - orderTime;
        const daysSinceOrder = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysSinceOrder === 0) {
            const hoursSinceOrder = Math.floor(timeDifference / (1000 * 60 * 60));
            return `${hoursSinceOrder} hour${hoursSinceOrder !== 1 ? 's' : ''} ago`;
        }

        return `${daysSinceOrder} day${daysSinceOrder !== 1 ? 's' : ''} ago`;
    }

    return (
        <Link href={`/pages/orders/${order.id}`} asChild>
            <Pressable>
                <View style={styles.container}>
                    <Stack.Screen options={{ headerShown: false }} />
                    <View style={styles.left}>
                        <Text style={styles.text}>Order: #{order.id}</Text>
                        <Text style={styles.subtext}>{getTimeSinceOrder(order.created_at)}</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.subtext}>Status:</Text>
                        <Text style={styles.text}>{order.status}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>

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