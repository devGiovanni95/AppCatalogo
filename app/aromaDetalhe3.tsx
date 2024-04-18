import React from 'react';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';
import SloganText from '../components/SloganText';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma amadeirado'} />
            <SloganText text={'Quente, intenso, terroso, aconchegante, sofisticado'}></SloganText>
            <ScentDetail
                id={3}
                text1={'Sinta o calor aconchegante da madeira em suas diversas nuances, experimentando a força intensa do sândalo, a terrosidade do vetiver e a sofisticação do oud.'}
                text2={'Os aromas amadeirados transmitem segurança e estabilidade, criando um ambiente perfeito para relaxar e se conectar com a natureza.'}
                matches={['cores neutras,', 'noites de pensamentos', 'e momentos de instrospecção']}
            />
        </ScrollView>
    );
}
