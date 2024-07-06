import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '@/provider/CartProvider'
import CartListItem from '@/components/CartListItem';
import { Stack } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import Colors from '@/constants/Colors';



const CartScreen = () => {
    const { items, total } = useCart();
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Cart',
                }}
            />
            <FlatList
                style={{ marginTop: 10 }}
                data={items}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                numColumns={1}
                contentContainerStyle={{ gap: 10, padding: 10 }}
            />
            <View style={styles.cartbutton} >
                <View style={styles.prices}>
                    <Text>Total Value:</Text>
                    <Text style={styles.price}>${total}</Text>
                </View>
                <CustomButton text='Add to Cart' />
            </View>
        </View>
    );
};

export default CartScreen

const styles = StyleSheet.create({
    cartbutton: {
        width: '80%',
        marginHorizontal: 35,
        position: 'relative',
        bottom: 20,
    },
    container: {
        height: '100%',
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        fontSize: 18,
    },
    prices: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});