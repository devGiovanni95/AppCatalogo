import React from 'react';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentDetail from '../components/ScentDetail';
import SloganText from '../components/SloganText';

export default function Aromas() {
    return (
        <ScrollView>
            <TitleComponent title={'Aroma cítrico'} />
            <SloganText text={'Revigorante, fresco, vibrante, ácido, energizante'}></SloganText>
            <ScentDetail
                id={0}
                description={`Imagine-se em um campo ensolarado de laranjeiras, banhado pela luz e pelo aroma vibrante e revigorante dos cítricos.
A frescura do limão siciliano, a acidez da lima e a doçura da tangerina se combinam em uma explosão de energia que revigora os sentidos e eleva o humor.`}
                matches={['cores vibrantes,', 'manhãs e inícios de tarde', 'e música instrumental alegre']} 
            />
        </ScrollView>
    );
}
