import { Stack, router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function Profile() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: 'Profile', headerRight: () => null }} />
      <Pressable onPressOut={() => router.push('/pages/orders/')} style={styles.box}>
        <Text style={styles.title}>Orders</Text>
      </Pressable>
      <Pressable onPressOut={() => router.push('/pages/settings/')} style={styles.box}>
        <Text style={styles.title}>Settings</Text>
      </Pressable>
      <Pressable onPressOut={() => router.push('/(admin)/')} style={styles.box}>
        <Text style={styles.title}>Admin</Text>
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
