import { View } from 'react-native';
import React from 'react';
import Button from '@components/CustomButton';
import { Link, Stack } from 'expo-router';

const index = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>

            <Stack.Screen
                options={{
                    title: "Login",
                }} />
            <Link href={'/(user)'} asChild>
                <Button text="User" />
            </Link>
            <Link href={'/(admin)'} asChild>
                <Button text="Admin" />
            </Link>
        </View>
    );
};

export default index;