import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma adocicado'} />
            <Text style={{ fontSize: 16, textAlign: 'center', marginVertical: 10 }}>
            Suave, açucarado, aconchegante, sensual, meloso
            </Text>
            <ScentDetail
                id={1}
                description={`Mergulhe em um abraço aconchegante de aromas doces e gourmand. Deixe-se envolver pela suavidade da baunilha, pelo calor cremoso do caramelo e pela doçura melíflua do mel. 
As notas de chocolate quente e canela especiada criam um ambiente acolhedor e sensual, perfeito para relaxar e se conectar com o seu interior.`}
                matches={['cores quentes', 'noites e fins de tarde', 'e banhos quentes relaxantes']} 
            />
        </ScrollView>
    );
}
