import { ActivityIndicator, FlatList, View } from 'react-native';
import products from '@assets/data/products';
import Product from '@components/Product';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/provider/AuthProvider';

export default function TabOneScreen() {
  const { session, loading } = useAuth();
  console.log(session);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (!session) {
    return <Redirect href="/auth/sign_in" />;
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#161622' }}>
      <Stack />
      <FlatList
        style={{ marginTop: -20 }}
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </SafeAreaView>
  );
}