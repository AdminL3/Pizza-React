import { FlatList, View } from 'react-native';

import products from '@assets/data/products';
import Product from '@components/Product';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

export default function TabOneScreen() {
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