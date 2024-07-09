import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@/provider/AuthProvider';

const AuthLayout = () => {
    const { session } = useAuth();
    if (session) {
        return <Redirect href="/(user)/" />;
    }
    return (
        <Stack />
    )
}

export default AuthLayout