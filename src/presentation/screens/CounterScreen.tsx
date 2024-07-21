import {useState} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/primaryButton';

import * as React from 'react';
import { Button } from 'react-native-paper';
export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
       
      
      {/*

      <PrimaryButton
        label='Incrementar'
        onPress={()=> setCount(count+1) }
        onLongPress={()=> setCount(0)}
      >
      </PrimaryButton>
      */}

      <Button
        mode='contained'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      >
        +1
        
      </Button>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
 
});
