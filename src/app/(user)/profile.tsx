import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
export default function Profile() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: 'Profile', headerRight: () => null }} />
      <View style={styles.box}>
        <Link href="/pages/orders" style={styles.title}>Orders</Link>
      </View>
      <View style={styles.box}>
        <Link href="/pages/settings" style={styles.title}>Settings</Link>
      </View>
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
