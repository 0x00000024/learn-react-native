import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

const ImageDetail= ({title, imageSource, score}) => {
  return (
    <View>
      <Image source={imageSource}/>
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default ImageDetail;
