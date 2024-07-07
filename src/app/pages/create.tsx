import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { defaultPizzaImage } from '@/components/Product'
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router'

const Create = () => {
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [error, setError] = React.useState('')
    const [image, setImage] = useState<string | null>(null);

    const { id } = useLocalSearchParams();
    const isupdating = !!id;


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri as unknown as null);
        } else {
            setError('No image selected')
        }
    };

    const validateInput = () => {
        setError('')
        if (name === '') {
            setError('Name is required')
            return false
        }
        if (price === '') {
            setError('Price is required')
            return false
        }
        if (isNaN(parseFloat(price))) {
            setError('Price must be a number')
            return false
        }
        return true
    }

    const onSubmit = () => {
        if (!validateInput()) {
            return
        }
        if (isupdating) {
            onUpdate()
        } else {
            onCreate()
        }
    }
    const resetField = () => {
        setError('')
        setImage(null)
        setName('')
        setPrice('')
    }
    const onDelete = () => {
        Alert.alert('Are you sure?', 'Are you sure you want to delete this product?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete', style: 'destructive', onPress: () => {
                    deleteProduct()
                }
            }
        ])
    }






    const onUpdate = () => {
        //update Product
        Alert.alert('Success', 'Product updated successfully');
        resetField();
    }
    const onCreate = () => {
        //create Product

        Alert.alert('Success', 'Product created successfully');
        resetField()
    }

    const deleteProduct = () => {
        // Logic to delete the product

        Alert.alert('Success', 'Product deleted successfully');
        resetField();
    }

    return (
        <ScrollView style={{ height: '100%' }}>
            <Stack.Screen options={{ headerTitle: isupdating ? 'Update' : 'Create', headerRight: () => null }} />
            <View style={styles.container}>
                <View>
                    <Image source={{ uri: image ?? defaultPizzaImage }} style={styles.image} />
                    <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold' }} onPress={pickImage}>
                        Select Image
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder='Name'
                        style={styles.input}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput
                        value={price}
                        onChangeText={setPrice}
                        placeholder='9.99'
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </View>
                <Text style={styles.error}>{error}</Text>
                <View style={styles.btn}>
                    <CustomButton onPress={onSubmit} text={isupdating ? 'Update' : 'Create'} />
                    {isupdating && <CustomButton onPress={onDelete} text='Delete' />}
                </View>
            </View>
        </ScrollView>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    box: {
        padding: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 5,
        marginTop: 7,
    },
    label: {
        fontSize: 16,
        color: 'grey',
    },
    image: {
        width: '60%',
        aspectRatio: 1,
        alignSelf: 'center',

    },
    btn: {
        marginHorizontal: '5%',
        width: '90%',
    },
    error: {
        fontSize: 15,
        color: 'red',
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 20,
    }
})