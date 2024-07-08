import React from 'react';
import { Redirect, Stack } from 'expo-router';
const index = () => {
    return (<Redirect href="/(auth)/sign_up" />)
};

export default index;