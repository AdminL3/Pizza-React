import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@assets/data/products';
import { TabBarIcon } from '@app/(user)/_layout';
import CustomButton from '@components/CustomButton';
import React from 'react';


const ProductDetails = () => {
    const { id } = useLocalSearchParams();
    const product = products.find((product) => product.id.toString() === id);

    const router = useRouter();





    return (
        <View style={{ height: '100%' }}>
            <Stack.Screen
                options={{
                    title: product?.name,
                    headerLeft: () => (
                        <Pressable onPress={() => router.back()} style={{ marginLeft: 20 }}>
                            <TabBarIcon name='arrow-back' color='#fff' size={28} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Link href={`/pages/create?id=${id}`} asChild>
                            <Pressable style={{ marginRight: 20 }}>
                                <TabBarIcon name='brush-outline' color='#fff' size={28} />
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <View style={styles.container}>
                <Image src={product?.image} style={styles.image} />
                <Text style={styles.title}>{product?.name}</Text>
                <Text style={styles.price}>${product?.price}</Text>
                <CustomButton text='Add to Cart' />
            </View>
        </View >
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161622',
    },
    title: {
        fontSize: 30,
        color: '#fff',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        fontFamily: 'SpaceMono',
        color: '#fff',
        marginLeft: 20,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
});

export default ProductDetails;