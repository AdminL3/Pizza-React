import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { defaultPizzaImage } from '@/components/Product'
import * as ImagePicker from 'expo-image-picker';

const Create = () => {
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [error, setError] = React.useState('')
    const [image, setImage] = useState<string | null>(null);



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
    const resetInput = () => {
        setName('')
        setPrice('')
    }


    const oncreate = () => {
        if (validateInput()) {
            resetInput()
        }

    }


    return (
        <SafeAreaView style={{ height: '100%' }}>
            <ScrollView style={{ height: '100%' }}>
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
                        <CustomButton onPress={oncreate} text='Create' />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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