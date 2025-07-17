import { StyleSheet, View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://zssxc.ningbowater.com/nbzssApi/files/C06B6AABEDEE411D6DA0B82A2D1C255B.png',
        }}
      />
      <Text style={styles.text}>hello word</Text>
      <View style={styles.card}>
        <Text>这是一个卡片</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 50,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
  },
  card: {
    marginTop: 20,
    margin: 30,
    backgroundColor: '#eee',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: 20,
    padding: 20,
  },
});

export default App;
