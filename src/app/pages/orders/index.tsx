import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import OrderItem from '@/components/OrderItem';
import orders from '@assets/data/orders';

const Orders = () => {
    return (
        <SafeAreaView>
            <FlatList
                style={{}}
                data={orders}
                renderItem={({ item }) => <OrderItem order={item} />}
                numColumns={2}
                contentContainerStyle={{ gap: 10, padding: 10 }}
                columnWrapperStyle={{ gap: 10 }}
            />
        </SafeAreaView>
    )
}
export default Orders

const styles = StyleSheet.create({})