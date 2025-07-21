import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import { Colors } from '../../../constants/Colors';

const ThemedButton = ({ style, btnText, ...props }: any) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [pressed && styles.pressed, styles.button, style]}
    >
      <Text style={styles.buttonText}>{btnText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  // 按下时的样式
  pressed: {
    opacity: 0.75,
  },
});

export default ThemedButton;
