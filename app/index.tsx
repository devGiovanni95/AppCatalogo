import React, { useEffect, useRef } from 'react';
import { DrawerLayoutAndroid, ScrollView, View } from 'react-native';
import ImageOverlayComponent from '../components/ImageOverlayComponent';
import Title from '../components/TitleComponent';
import ContainerImageText from '../components/ContainerImage';
import { useConnection } from '../hooks/connection';
import {  useRouter } from 'expo-router';

export default function Home() {
    const connection = useConnection()
    const imageUrl = require('../assets/image1.png');
    const imageUrl1 = require('../assets/image2.png');
    const success = useRef<DrawerLayoutAndroid>(null);
    const router = useRouter();

    useEffect(() => {
        const checkInternetConnection = async () => {
            try {
                // await connection.check();
                if (!connection.isConnected) {
                    router.push('/lackInternet');
                    success.current?.closeDrawer();
                }
            } catch (error) {
                console.error('Erro ao verificar a conexão com a internet:', error);
            }
        };
        checkInternetConnection();
    }, [connection, router]);

    return(
            <ScrollView >
                <Title title={'Novidades'}></Title>
                <ImageOverlayComponent imageUrl={imageUrl} legend={"Exemplo de Legenda"}/>
                <Title title={'Outros Tópicos'}></Title>
                <ContainerImageText imageUrl={imageUrl1} text={'Como decidir o melhor aroma?'}/>
                <ContainerImageText imageUrl={imageUrl1} text={'Conheça nosso portfólio!'}/>
                <ContainerImageText imageUrl={imageUrl1} text={'Os segredos'}/>

            </ScrollView>
    );
}
