import React from 'react';
import { Link, Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { Pressable } from 'react-native';

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#9900cc',
        tabBarInactiveTintColor: '#999999',

        tabBarStyle: {
          backgroundColor: '#fff',
          height: 50,
        },
        headerStyle: {
          backgroundColor: '#161622',
          borderBottomColor: 'white',
          borderBottomWidth: 2,
          height: 90,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerShown: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerRight: (focused) => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <TabBarIcon
                  name={'cart'}
                  color={'#fff'}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Admin',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              name={focused ? 'pizza' : 'pizza-outline'}
              color={color}
              style={{ transform: [{ rotate: focused ? '180deg' : '0deg' }] }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={color}
            />
          ),

        }}
      />

      <Tabs.Screen
        name="[id]"

        options={
          {
            title: 'Item Details',
            href: null
          }
        } />
    </Tabs >
  );
}