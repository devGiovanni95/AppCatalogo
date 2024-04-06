import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma amadeirado'} />
            <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 10 }}>
            Quente, intenso, terroso, aconchegante, sofisticado
            </Text>
            <ScentDetail
                id={3}
                description={`Sinta o calor aconchegante da madeira em suas diversas nuances, experimentando a força intensa do sândalo, a terrosidade do vetiver e a sofisticação do oud.
Os aromas amadeirados transmitem segurança e estabilidade, criando um ambiente perfeito para relaxar e se conectar com a natureza.`}
                matches={['cores neutras,', 'noites de pensamentos', 'e momentos de instrospecção']} 
            />
        </ScrollView>
    );
}
