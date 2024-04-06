import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentItemComponent from '../components/ScentItemComponent';
import { router } from 'expo-router';

const aromas = [
    { id: 0, titulo: "Cítrico", description: "Revigorante, fresco, vibrante, ácido, energizante" },
    { id: 1, titulo: "Adocicado", description: "Suave, açucarado, aconchegante, sensual, meloso" },
    { id: 2, titulo: "Frutado", description: "Vibrante, fresco, suculento, doce, tropical" },
    { id: 3, titulo: "Amadeirado", description: "Quente, intenso, terroso, aconchegante, sofisticado" },
];

export default function Aromas() {
    const [scentId, setScentId] = useState(0);
    
    return (
    <ScrollView>
        <TitleComponent title={'Aromas'}></TitleComponent>
        <View style={{ alignItems: "center" }}>
            {aromas.map((aroma) => (
            <ScentItemComponent
            key={aroma.id}
            id={aroma.id}
            name={aroma.titulo}
            description={aroma.description} 
            onPress={() => {
                setScentId(aroma.id);
                router.push(`/aromaDetalhe${aroma.id}`)
            }}
            />
        ))}
        </View>
    </ScrollView>
    );
}
