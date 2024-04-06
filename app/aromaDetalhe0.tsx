import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma cítrico'} />
            <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 10 }}>
                Revigorante, fresco, vibrante, ácido, energizante
            </Text>
            <ScentDetail
                id={0}
                description={`Imagine-se em um campo ensolarado de laranjeiras, banhado pela luz e pelo aroma vibrante e revigorante dos cítricos.
A frescura do limão siciliano, a acidez da lima e a doçura da tangerina se combinam em uma explosão de energia que revigora os sentidos e eleva o humor.`}
                matches={['cores vibrantes,', 'manhãs e inícios de tarde', 'e música instrumental alegre']} 
            />
        </ScrollView>
    );
}
