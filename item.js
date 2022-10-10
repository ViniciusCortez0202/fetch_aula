import React from 'react';
import { Text, View } from 'react-native';

export default function Item({item}) {
 return (
   <View style={{flex: 1, margin: 10}}>
    <Text>{item.apelido}</Text>
   </View>
  );
}