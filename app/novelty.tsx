import React from 'react';
import { ScrollView, View } from 'react-native';
import ImageOverlayComponent from '../components/ImageOverlayComponent';
import DrawerComponent from '../components/DrawerComponent';
import Title from '../components/TitleComponent';
import ContainerImageText from '../components/ContainerImage';


export default function News(){
    const imageUrl = require('../assets/image1.png');
    const imageUrl1 = require('../assets/image2.png');

    return(
        <DrawerComponent>
            <ScrollView >
                <Title title={'Novidades'}></Title>
                <ImageOverlayComponent imageUrl={imageUrl} legend={"Exemplo de Legenda"}/>
                <Title title={'Outros Tópicos'}></Title>
                <ContainerImageText imageUrl={imageUrl1} text={'Como decidir o melhor aroma?'}/>
                <ContainerImageText imageUrl={imageUrl1} text={'Conheça nosso portfólio!'}/>
                <ContainerImageText imageUrl={imageUrl1} text={'Os segredos'}/>

            </ScrollView>
        </DrawerComponent>
        
     
    );
}