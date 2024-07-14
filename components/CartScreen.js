import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import useCart from '../hooks/useCart';

const CartScreen = ({ navigation }) => {
  const [cart] = useCart();

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CartScreen;
