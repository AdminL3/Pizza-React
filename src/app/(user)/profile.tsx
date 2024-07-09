import { supabase } from '@/lib/supabase';
import { Stack, router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function Profile() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: 'Profile', headerRight: () => null }} />
      <Pressable onPressIn={() => router.push('/pages/orders/')} style={styles.box}>
        <Text style={styles.title}>Orders</Text>
      </Pressable>
      <Pressable onPressIn={() => router.push('/pages/settings/')} style={styles.box}>
        <Text style={styles.title}>Settings</Text>
      </Pressable>
      <Pressable onPressIn={() => router.push('/(admin)/')} style={styles.box}>
        <Text style={styles.title}>Admin</Text>
      </Pressable>
      <Pressable onPressIn={handleSignOut} style={styles.box}>
        <Text style={styles.title}>Sign Out</Text>
      </Pressable>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 60,
    backgroundColor: '#161622',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 10,
  },
});