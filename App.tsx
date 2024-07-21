/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView } from 'react-native';


import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicons {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        

      <CounterM3Screen/>
      {/*   <HelloWorldScreen name='Nicolas Garcia'/>    */}
        {/*  <CounterScreen />  */}
        

      </SafeAreaView>
      </PaperProvider>
  );
};
