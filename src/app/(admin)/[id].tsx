import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState, useRef } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@assets/data/products';
import { TabBarIcon } from '@/app/(user)/_layout';
import CustomButton from '@/components/CustomButton';

import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from '@/types';


const ProductDetails = () => {
    const { id } = useLocalSearchParams();
    const product = products.find((product) => product.id.toString() === id);
    const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];
    const [selectedSize, setselectedSize] = useState<PizzaSize>('M');

    const [text, setText] = useState('');
    const router = useRouter();

    const scrollViewRef = useRef<ScrollView>(null);
    const addToCart = () => {
        if (!product) return console.log('Product not found');
        addItem(product, selectedSize, text);
        setText('');
        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
        router.push('/cart');
    };


    const { addItem } = useCart();



    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    title: product?.name,
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()} style={{ marginLeft: 20 }}>
                            <TabBarIcon name='arrow-back' color='#fff' size={28} />
                        </Pressable>
                    ),
                }}
            />
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{
                    backgroundColor: '#161622',
                }}>
                <View style={styles.container}>
                    <View style={styles.whitebox}>
                        <Image src={product?.image} style={styles.image} />
                        <Text style={styles.title}>{product?.name}</Text>
                        <Text style={styles.price}>${product?.price}</Text>
                    </View>
                    <View
                        style={styles.divider}
                    />
                    <View style={styles.whitebox}>
                        <Text style={styles.sizeTitle}>Select Size:</Text>
                        <View style={styles.sizeRow}>

                            {sizes.map((size) => (
                                <Pressable
                                    key={size}
                                    style={[
                                        styles.sizes,
                                        { backgroundColor: selectedSize === size ? 'gainsboro' : 'white' }
                                    ]}
                                    onPress={() => setselectedSize(size)}
                                >
                                    <Text style={{
                                        color: selectedSize === size ? 'black' : 'gray',
                                        fontWeight: selectedSize === size ? 'bold' : 'normal',
                                        fontSize: selectedSize === size ? 25 : 19,
                                    }}>
                                        {size}
                                    </Text>
                                </Pressable>
                            ))
                            }
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                marginTop: 10,
                            }}
                        />
                    </View>
                    <View style={[styles.whitebox, {}]}>

                        <Text style={styles.sizeTitle}>Other Preferences:</Text>
                        <TextInput
                            value={text}
                            onChangeText={setText}
                            maxLength={30}
                            placeholder='No Onions'
                            style={{
                                height: 40,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 2,
                                marginLeft: 20,
                                marginRight: 20,
                                marginBottom: 15,
                            }}

                        />
                        <View style={styles.cartbutton} >
                            <CustomButton onPress={addToCart} text='Add to Cart' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};



const styles = StyleSheet.create({
    whitebox: {
        backgroundColor: '#fff',
        borderRadius: 20,
        flex: 1,
        marginBottom: 10,

    },
    container: {
        borderRadius: 20,
        flex: 1,
        paddingBottom: 60,
    },
    title: {
        fontSize: 30,
        color: '#161622',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        fontFamily: 'SpaceMono',
        color: '#8c8c8c',
        marginLeft: 20,
        marginBottom: 20,
    },
    sizeTitle: {
        fontSize: 15,
        fontFamily: 'SpaceMono',
        color: '#8c8c8c',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,

    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    sizeRow: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },
    sizes: {
        width: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 5,
        marginTop: 5,
    },
    cartbutton: {
        width: '90%',
        marginHorizontal: 20,

    },
});

export default ProductDetails;