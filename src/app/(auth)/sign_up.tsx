import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import CustomButton from '@components/CustomButton';

export const checkValidation = (password: string, confirmPassword: string, email: string) => {
    if (password !== confirmPassword) {
        return 'Passwords do not match'
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    if (password.length > 20) {
        return 'Password must be less than 20 characters';
    }
    if (email.length < 4) {
        return 'Email must be at least 6 characters';
    }
    if (email.length > 20) {
        return 'Email must be less than 20 characters';
    }
    if (!email.includes('@')) {
        return 'Email is not valid';
    }
    if (!email.includes('.')) {
        return 'Email is not valid';
    }
    return true;
}
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignUp = () => {
        const validationResult = checkValidation(password, confirmPassword, email);
        if (validationResult !== true) {
            setError(validationResult);
            return;
        }
        router.push('(user)');
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }} />
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#8c8c8c"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#8c8c8c"
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor="#8c8c8c"
            />
            <View style={styles.btn}>
                <CustomButton text="Sign Up" onPress={handleSignUp} style={styles.customButton} />
            </View>
            <Text style={styles.signup} onPress={() => router.push('/pages/orders/')}>
                {/* Already have an account? Sign In */}go to orders
            </Text>
            <Text style={styles.error}>
                {error}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#161622',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: '#fff',
    },
    input: {
        height: 40,
        borderColor: '#8c8c8c',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: '#fff',
        width: '80%',
    },
    error: {
        color: 'red',
        marginBottom: 20,
        textAlign: 'center',
    },
    btn: {
        width: '80%',
    },
    customButton: {
        backgroundColor: '#9900cc',
    },
    signup: {
        color: 'white',
        marginBottom: 20,
    }
});

export default SignUp;