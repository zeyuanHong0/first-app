import React from 'react';
import { Image, useColorScheme } from 'react-native';

const LightLogo = require('../../assets/images/logo_light.png');
const DarkLogo = require('../../assets/images/logo_dark.png');

const ThemedLogo = ({ style }: any) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;

  return <Image source={logo} style={style} />;
};

export default ThemedLogo;
