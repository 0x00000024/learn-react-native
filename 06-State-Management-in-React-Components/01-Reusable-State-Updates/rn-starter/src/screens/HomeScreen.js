import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import PropTypes from 'prop-types';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
