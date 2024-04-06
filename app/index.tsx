import React, { useEffect, useRef } from 'react';
import { DrawerLayoutAndroid, ScrollView, View } from 'react-native';
import ImageOverlayComponent from '../components/ImageOverlayComponent';
import Title from '../components/TitleComponent';
import ContainerImageText from '../components/ContainerImage';
import { router } from 'expo-router';

export default function Home() {
    const imageUrl = require('../assets/image1.png');
    const imageUrl1 = require('../assets/index1.png');
    const imageUrl2 = require('../assets/index2.png');
    const imageUrl3 = require('../assets/index3.png');
    const imageUrl4 = require('../assets/index4.png');
    return(
            <ScrollView >
                <Title title={'Novidades'}></Title>
                <ImageOverlayComponent imageUrl={imageUrl} legend={"As velas de baunilha são a nova sensação!"}/>
                <Title title={'Outros Tópicos'}></Title>
                <ContainerImageText imageUrl={imageUrl1} text={'Conheça nosso portfólio!'}
                onPress={() => {
                    router.push(`/portfolio`)
                }}/>
                <ContainerImageText imageUrl={imageUrl2} text={'Como escolher o melhor aroma?'}
                onPress={() => {
                    router.push(`/aromas`)
                }}/>
                <ContainerImageText imageUrl={imageUrl3} text={'Segredos das velas aromáticas'}
                onPress={() => {
                    router.push(`/aromaDetalhe3`)
                }}/>
                <ContainerImageText imageUrl={imageUrl4} text={'Perguntas frequentes'}
                onPress={() => {
                    router.push(`/faq`)
                }}/>
            </ScrollView>
    );
}
