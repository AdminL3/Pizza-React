import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import orders from '@assets/data/orders';
import OrderItem from '@components/OrderItem';
import OrderDetailItem from '@components/OrderDetailItem';

const OrderDetailScreen = () => {
    const { id } = useLocalSearchParams();

    const order = orders.find((o) => o.id.toString() === id);

    if (!order) {
        return <Text>Order not found!</Text>;
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: `Order #${order.id}` }} />

            <OrderItem order={order} />
            <View style={{ height: 3, backgroundColor: '#161622' }} />
            <FlatList
                data={order.order_items}
                renderItem={({ item }) => <OrderDetailItem item={item} />}
                contentContainerStyle={{ gap: 10 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        gap: 10,
    },
});

export default OrderDetailScreen;