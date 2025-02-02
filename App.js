import { StyleSheet, Text, SafeAreaView, Button, Alert, Dimensions, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'dodgerblue', width: 100, height: 50, top: 20 }} />

      <View style={{ backgroundColor: 'gold', width: 100, height: 50 }} />

      <View style={{ backgroundColor: 'tomato', width: 100, height: 50, top: -30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    // justifyContent: 'space-between',//main
    alignItems: "center",//secondary
    flexDirection: 'row',//horizontal axis
    backgroundColor: '#fff',


  },
});


/**
 flex:1 = entire screen
 flex:0.5 = half screen
*/