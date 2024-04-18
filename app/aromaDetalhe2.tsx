import React from 'react';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';
import SloganText from '../components/SloganText';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma frutado'} />
            <SloganText text={'Vibrante, fresco, suculento, doce, tropical'}></SloganText>
            <ScentDetail
                id={2}
                text1={'Saboreie a suculência de frutas frescas a cada mordida olfativa. A explosão vibrante de morango, a doçura tropical da manga e a frescura cítrica do abacaxi transportam você para um paraíso de sabores e cores.'}
                text2={'Os aromas frutados despertam a alegria e a criatividade, criando um ambiente leve e descontraído'} 
                matches={['estampas florais,', 'momentos de alegria', 'e atividades ao ar livre da infância']}
            />
        </ScrollView>
    );
}
