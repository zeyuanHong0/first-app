import React from 'react';
import { Text, useColorScheme } from 'react-native';

import { Colors } from '../../../constants/Colors';

const ThemedText = ({ style, title = false, ...props }: any) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const textColor = title ? theme.title : theme.text; //是否是标题文本

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
