import React from 'react';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';
import SloganText from '../components/SloganText';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma adocicado'} />
            <SloganText text={'Suave, açucarado, aconchegante, sensual, meloso'}></SloganText>
            <ScentDetail
                id={1}
                description={`Mergulhe em um abraço aconchegante de aromas doces e gourmand. Deixe-se envolver pela suavidade da baunilha, pelo calor cremoso do caramelo e pela doçura melíflua do mel. 
As notas de chocolate quente e canela especiada criam um ambiente acolhedor e sensual, perfeito para relaxar e se conectar com o seu interior.`}
                matches={['cores quentes', 'noites e fins de tarde', 'e banhos quentes relaxantes']} 
            />
        </ScrollView>
    );
}
