import React from 'react';
import { ScrollView, View } from 'react-native';
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
                <ContainerImageText imageUrl={imageUrl1} text={'Como decidir o melhor aroma?'}/>
                <ContainerImageText imageUrl={imageUrl1} text={'Conheça nosso portfólio!'} onClick={() => router.push("/products")} />
                <ContainerImageText imageUrl={imageUrl1} text={'Os segredos'}/>

            </ScrollView>
    );
}
