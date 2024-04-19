import React, { ReactNode } from 'react';
import { Image, ImageSourcePropType, View, StyleSheet, Text, Pressable } from 'react-native';

interface ImageOverlayProps {
  imageUrl: ImageSourcePropType | undefined;
  legend: ReactNode;
  onPress: () => void;
}

export default function ImageOverlay({ imageUrl, legend, onPress }: ImageOverlayProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.imageStyles} />
        <View style={styles.overlay}>
          <Text style={styles.caption}>{legend}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    position: 'relative',
  },
  imageStyles: {
    width: '90%',
    height: 250,
    resizeMode: 'stretch',
    marginLeft: '5%',
    marginBottom: 16,
    position: 'relative',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlay: {
    position: 'absolute',
    bottom: 16,
    left: '5%',
    right: '5%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  caption: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

