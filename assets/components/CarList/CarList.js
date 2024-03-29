import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import CarItem from '../CarItem/CarItem';
import styles from './styles';

import cars from './cars';
import StyledButton from '../StyledButton/StyledButton';
const CarList = ({ navigation }) => {
  return (
    <View style={styles.newcontainer}>
      <FlatList
        data={cars}
        key={cars.name}
        renderItem={({ item }) => (
          <CarItem navigation={navigation} car={item}>
            snapTo
          </CarItem>
        )}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default CarList;
