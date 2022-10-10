import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Item from './item';
import Service from './src/services/service';

export default function App() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAtletas = async () => {
    try {
      const service = new Service();
      const result = await service.get(282);
      const atletas = result.atletas;
      setData(atletas);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    getAtletas();
  }, []);

  if(isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({item, index, separators}) => <Item item={item}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
