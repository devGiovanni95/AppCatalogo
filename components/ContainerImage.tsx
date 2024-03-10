import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface ImageTextProps {
  imageUrl: ImageSourcePropType | undefined;
  text: string;
  onClick?: () => void;
}

const ContainerImageText = ({ imageUrl, text, onClick }: ImageTextProps) => {
  const handlePress = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 150,
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
  },
  imageContainer: {
    flex: 2,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
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

export default ContainerImageText;
