import React, { useEffect, useRef } from 'react';
import { DrawerLayoutAndroid, ScrollView, View } from 'react-native';
import ImageOverlayComponent from '../components/ImageOverlayComponent';
import Title from '../components/TitleComponent';
import ContainerImageText from '../components/ContainerImage';
import { router } from 'expo-router';

export default function Home() {
    const imageUrl = require('../assets/image1.png');
    const imageUrl1 = require('../assets/image2.png');
    return(
            <ScrollView >
                <Title title={'Novidades'}></Title>
                <ImageOverlayComponent imageUrl={imageUrl} legend={"Exemplo de Legenda"}/>
                <Title title={'Outros Tópicos'}></Title>
                <ContainerImageText imageUrl={imageUrl1} text={'Como decidir o melhor aroma?'}
                onPress={() => {
                    router.push(`/aromas`)
                }}/>
                <ContainerImageText imageUrl={imageUrl1} text={'Conheça nosso portfólio!'}
                onPress={() => {
                    router.push(`/portfolio`)
                }}/>
                <ContainerImageText imageUrl={imageUrl1} text={'Os segredos'}
                onPress={() => {
                    router.push(`/aromaDetalhe3`)
                }}/>
            </ScrollView>
    );
}
