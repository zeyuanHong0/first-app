import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Register = ({ navigation }: any) => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Create Your Account
      </ThemedText>

      <Spacer height={100} />
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.replace('Login')}
      >
        <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  },
});

export default Register;
