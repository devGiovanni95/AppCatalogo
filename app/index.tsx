import React from 'react';
import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import ImageOverlay from '../components/ImageOverlay';
import Title from '../components/TitleComponent';
import ContainerImage from '../components/ContainerImage';

export default function Home() {
    const imageUrl = require('../assets/image1.png');
    const imageUrl1 = require('../assets/index1.png');
    const imageUrl2 = require('../assets/index2.png');
    const imageUrl3 = require('../assets/index3.png');
    const imageUrl4 = require('../assets/index4.png');
    return(
            <ScrollView >
                <Title title={'Novidades'}></Title>
                <ImageOverlay imageUrl={imageUrl} legend={"Velas de baunilha"}
                onPress={() => {
                    router.push(`/category`)
                }}/>
                <Title title={'Outros Tópicos'}></Title>
                <ContainerImage imageUrl={imageUrl1} text={'Conheça nosso portfólio!'}
                onPress={() => {
                    router.push(`/portfolio`)
                }}/>
                <ContainerImage imageUrl={imageUrl2} text={'Como escolher o aroma ideal?'}
                onPress={() => {
                    router.push(`/topicScent`)
                }}/>
                <ContainerImage imageUrl={imageUrl3} text={'Segredos das velas aromáticas'}
                onPress={() => {
                    router.push(`/topicSecret`)
                }}/>
                <ContainerImage imageUrl={imageUrl4} text={'Perguntas frequentes'}
                onPress={() => {
                    router.push(`/faq`)
                }}/>
            </ScrollView>
    );
}
