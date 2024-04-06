import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma frutado'} />
            <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 10 }}>
                Vibrante, fresco, suculento, doce, tropical
            </Text>
            <ScentDetail
                id={2}
                description={`Saboreie a suculência de frutas frescas a cada mordida olfativa. A explosão vibrante de morango, a doçura tropical da manga e a frescura cítrica do abacaxi transportam você para um paraíso de sabores e cores.
Os aromas frutados despertam a alegria e a criatividade, criando um ambiente leve e descontraído.`}
                matches={['estampas florais,', 'momentos de alegria', 'e atividades ao ar livre da infância']} 
            />
        </ScrollView>
    );
}
