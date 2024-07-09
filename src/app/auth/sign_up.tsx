import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import CustomButton from '@components/CustomButton';
import { supabase } from '@/lib/supabase';

export const checkValidation = (password: string, confirmPassword: string, email: string) => {
    if (!email.includes('@')) {
        return 'Email is not valid';
    }
    if (email.length < 4) {
        return 'Email must be at least 6 characters';
    }
    if (!email.includes('.')) {
        return 'Email is not valid';
    }
    if (password !== confirmPassword) {
        return 'Passwords do not match'
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    if (password.length > 20) {
        return 'Password must be less than 20 characters';
    }
    if (password.includes(' ')) {
        return 'Password cannot contain spaces';
    }
    const specialSymbols = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialSymbols.test(password)) {
        return 'Password must contain at least one special symbol';
    }
    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
        return 'Password must contain at least one number';
    }
    const hasUppercase = /[A-Z]/;
    if (!hasUppercase.test(password)) {
        return 'Password must contain at least one uppercase letter';
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
        // const validationResult = checkValidation(password, confirmPassword, email);
        // if (validationResult !== true) {
        //     setError(validationResult);
        //     return;
        // }
        signUpWithEmail();
    };


    const [loading, setLoading] = useState(false);
    async function signUpWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (error) {
            Alert.alert(error.message);
        } else {
            router.push('(user)');
        }
        setLoading(false);
    }



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
                <CustomButton
                    text={loading ? "Signing Up..." : "Sign Up"}
                    disabled={loading}
                    onPress={handleSignUp}
                    style={styles.customButton} />
            </View>
            <View style={{ marginTop: 20 }}>
                {loading ? <ActivityIndicator size="small" color="#ffffff" /> :
                    <Text style={styles.signup} onPress={() => router.push('/auth/sign_in')}>
                        Already have an account? Sign In
                    </Text>
                }
            </View>
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

