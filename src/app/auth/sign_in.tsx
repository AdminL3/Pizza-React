import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import CustomButton from '@components/CustomButton';
import { supabase } from '@/lib/supabase';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            Alert.alert(error.message);
        } else {
            router.push('(user)');
        }
        setLoading(false);
    };
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }} />
            <Text style={styles.title}>Sign In</Text>
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
            <View style={styles.btn}>

                <CustomButton
                    disabled={loading}
                    text={loading ? "Signing In..." : "Sign In"}
                    onPress={handleSignIn}
                    style={styles.customButton}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                {loading ? <ActivityIndicator size="small" color="#ffffff" /> :
                    <Text style={styles.signup} onPress={() => router.push('/auth/sign_up')}>
                        Don't have an account? Sign Up
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

export default SignIn;