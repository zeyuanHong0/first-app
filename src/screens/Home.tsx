import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';

const Home = ({ navigation }: any) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.logo} />
      <ThemedText style={{ fontSize: 18, fontWeight: 'bold' }} title>
        Reading List App
      </ThemedText>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('About')}
      >
        <ThemedText style={styles.text}>前往阅读列表</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default Home;
