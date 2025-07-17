import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const About = () => {
  return (
    <View>
      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>关于我们</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: '#eee',
          borderRadius: 10,
        }}
      >
        <Text>这是一个关于页面</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default About;
