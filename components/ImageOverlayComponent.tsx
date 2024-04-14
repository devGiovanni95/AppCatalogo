import React, { ReactNode } from 'react';
import { Image, ImageSourcePropType, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IImage {
  imageUrl: ImageSourcePropType | undefined;
  legend: ReactNode;
  onClick?: () => void; // Função opcional a ser chamada ao clicar
}

export default function ImageOverlayComponent({ imageUrl, legend, onClick }: IImage) {
  const handlePress = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.imageStyles} />
        <View style={styles.overlay}>
          <Text style={styles.caption}>{legend}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
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
    marginTop: '40%',
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
