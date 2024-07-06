import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '@/provider/CartProvider'
import CartListItem from '@/components/CartListItem';
import { router, Stack } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import Colors from '@/constants/Colors';
import { TabBarIcon } from '@app/(user)/_layout';



const CartScreen = () => {
    const { items, total } = useCart();
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Cart',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    headerBackground() {
                        return (
                            <View style={{ backgroundColor: '#161622', height: '100%' }} />
                        )
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()}>
                            <TabBarIcon name='arrow-back' color='#fff' size={28} />
                        </Pressable>
                    ),
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
                    <Text style={styles.price}>${total.toFixed(2)}</Text>
                </View>
                <CustomButton text='Checkout' />
            </View>
        </View>
    );
};

export default CartScreen

const styles = StyleSheet.create({
    cartbutton: {
        width: '90%',
        marginHorizontal: '5%',
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