import React, { ReactNode } from 'react';
import { Image, ImageSourcePropType, View, StyleSheet, Text } from 'react-native';

interface IImage {
  imageUrl: ImageSourcePropType | undefined;
  legend: ReactNode
}

export default function ImageOverlayComponent({ imageUrl, legend }: IImage) {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.imageStyles} />
      <View style={styles.overlay}>
        <Text style={styles.caption}>{legend}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
  },

  imageStyles: {
    width: 370,
    height: 250,
    resizeMode: 'stretch',
    marginLeft: '5%',
    position: 'relative',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginTop: '50%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
  },

  caption: {
    fontSize: 16,
    color: '#fff', 
    textAlign: 'left',
    marginTop: '5%',
    marginLeft: '2%',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
