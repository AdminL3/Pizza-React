import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import OrderItem from '@/components/OrderItem';
import orders from '@assets/data/orders';

const Orders = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ marginTop: -10 }}
                data={orders}
                renderItem={({ item }) => <OrderItem order={item} />}
                contentContainerStyle={{ gap: 10, padding: 10 }}
            />
        </SafeAreaView>
    )
}
export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})