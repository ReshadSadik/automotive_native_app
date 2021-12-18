import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native';
import StyledButton from '../StyledButton/StyledButton';
import styles from './styles';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text>AUTOMOTIVE</Text>

      {/* <Image
        style={styles.logo}
        source={require('../../images/logo.png')}
      ></Image> */}
      <Image
        style={styles.menu}
        source={require('../../images/menu.png')}
      ></Image>
    </View>
  );
};

export default Navbar;
