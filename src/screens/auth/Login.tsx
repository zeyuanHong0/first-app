import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Login = ({ navigation }: any) => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <Spacer height={100} />
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.replace('Register')}
      >
        <ThemedText style={{ textAlign: 'center' }}>
          Register instead
        </ThemedText>
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

export default Login;
