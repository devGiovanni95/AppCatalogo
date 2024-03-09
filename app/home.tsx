import React from 'react';
import { Text, View } from 'react-native';
import DrawerComponent from '../components/DrawerComponent';
import ImageComponent from '../components/ImageComponent';

export default function Home() {
    const imageUrl = require('../assets/image1.png');
    const imageUrl1 = require('../assets/image2.png');
    const imageUrl2 = require('../assets/image3.png');

    return (
        <DrawerComponent>
            <View>
                <ImageComponent imageUrl={imageUrl} descrição="Velas aromáticas" descrição1="" />
                <ImageComponent imageUrl={imageUrl1} descrição="Velas normais" descrição1="" />
                <ImageComponent imageUrl={imageUrl2} descrição="Velas aromáticas" descrição1="" />
                {/* Conteúdo da tela Home */}
            </View>
        </DrawerComponent>
    );
}
