import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Home = ({ navigation }: any) => {
  console.log('Home组件加载');
  return (
    <View>
      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>欢迎来到首页</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: '#eee',
          borderRadius: 10,
        }}
      >
        <Text>这是一个首页</Text>
      </View>
      <Button
        title="点击前往关于"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
