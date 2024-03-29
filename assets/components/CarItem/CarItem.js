import React from 'react';
import './styles.js';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/StyledButton.js';
import Login from '../Login/Login.js';

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  const navigation = props.navigation;

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image}></ImageBackground>

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.butttonsContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => navigation?.navigate('Login')}
        ></StyledButton>
        <StyledButton
          type="secondary"
          content="Existing Orders"
          onPress={() => {
            console.warn('existing order placed');
          }}
        ></StyledButton>
      </View>
    </View>
  );
};
export default CarItem;
