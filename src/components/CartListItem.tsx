import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { CartItem } from '../types';
import { FontAwesome } from '@expo/vector-icons';
import { useCart } from '@provider/CartProvider';
import { defaultPizzaImage } from './Product';

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function MyIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
    return <Ionicons size={30} style={[{ marginBottom: -3 }, style]} {...rest} />;
}



type CartListItemProps = {
    cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
    const { updateQuantity } = useCart();
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: cartItem.product.image || defaultPizzaImage }}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{cartItem.product.name}</Text>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.price}>${cartItem.product.price.toFixed(2)}</Text>
                    <Text>Size: {cartItem.size}</Text>

                </View>
                <View>
                    {cartItem.options && (
                        <Text style={styles.extras}>Extras: {cartItem.options}</Text>
                    )}
                </View>
            </View>
            <View style={styles.quantitySelector}>
                <MyIcon
                    onPress={() => updateQuantity(cartItem.id, -1)}
                    name={'remove-circle'}
                    color="#e60000"
                />

                <Text style={styles.quantity}>{cartItem.quantity}</Text>
                <MyIcon
                    onPress={() => updateQuantity(cartItem.id, 1)}
                    name={'add-circle'}
                    color="#00cc00"
                    style={{ opacity: 5 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 75,
        aspectRatio: 1,
        alignSelf: 'center',
        marginRight: 10,
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 5,
    },
    subtitleContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    quantitySelector: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        marginRight: 12,
    },
    quantity: {
        fontWeight: '500',
        fontSize: 18,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    },
    extras: {
        color: '#ff8000',
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 13,
    }
});

export default CartListItem;