import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, Pressable } from 'react-native';

interface ContainerImageProps {
  imageUrl: ImageSourcePropType | undefined;
  text: string,
  onPress: () => void
}

export default function ContainterImage({ imageUrl, text, onPress }: ContainerImageProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    margin: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    flex: 2,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
