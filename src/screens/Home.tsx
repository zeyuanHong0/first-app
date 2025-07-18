import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';

import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

const Home = ({ navigation }: any) => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.upperContainer}>
        <ThemedLogo style={styles.logo} />
        <ThemedText style={styles.title} title>
          Reading List App
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Discover, organize, and enjoy your favorite books
        </ThemedText>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
        >
          <ThemedText style={styles.buttonText}>登 录</ThemedText>
        </TouchableOpacity>

        <Spacer height={16} />

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
        >
          <ThemedText style={styles.buttonTextSecondary}>注 册</ThemedText>
        </TouchableOpacity>

        <Spacer height={30} />

        <ThemedText style={styles.footerText}>畅享阅读的美好时光</ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  upperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
    marginHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 40,
  },
  buttonPrimary: {
    backgroundColor: '#5271FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5271FF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  buttonTextSecondary: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5271FF',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    opacity: 0.6,
    marginTop: 10,
  },
});

export default Home;
