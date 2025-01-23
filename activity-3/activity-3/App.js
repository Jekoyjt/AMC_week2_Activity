import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
  <SafeAreaView style={styles.container}>
  <Text style={styles.baseText}>
  Jericho
  <Text style={styles.innerText}> Tolentino</Text>
  </Text>
    <Text style={styles.baseText}>
   BSIT - 302
  </Text>
    <Text style={styles.aText}>
  Magddrive ako hanggang mindanao,
  <Text style={styles.bText}> Sumama ka kung gusto mo pag ayaw mo edi wag,</Text>
  </Text>
    <Text style={styles.cText}>
  Lumangoy ka hanggang mindanao.
  <Text style={styles.dText}> Pag ayaw mo gumapang ka</Text>
  </Text>
  </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    color: 'red',
    textAlign: 'center',
  },
  innerText: {
    color: 'blue',
    textAlign: 'center',
  },
  aText: {
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bText: {
    color: 'maroon',
    textAlign: 'center',
  },
  cText: {
    color: 'orange',
    textAlign: 'center',
  },
  dText: {
    color: 'violet',
    textAlign: 'center',
  },
});

export default BoldAndBeautiful;