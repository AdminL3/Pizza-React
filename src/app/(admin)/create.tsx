import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

const Create = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput placeholder='Name' style={styles.input} />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput placeholder='9.99' style={styles.input} keyboardType='numeric' />
                </View>
                <View style={styles.btn}>
                    <CustomButton text='Create' />

                </View>
            </View>
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
        width: '100%',
        aspectRatio: 1,
    },
    btn: {
        marginHorizontal: '5%',
        width: '90%',
    },
})