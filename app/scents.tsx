import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import TitleComponent from '../components/TitleComponent';
import ScentItem from '../components/ScentItem';

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
            <ScentItem
            key={aroma.id}
            id={aroma.id}
            name={aroma.titulo}
            description={aroma.description} 
            onPress={() => {
                setScentId(aroma.id);
                router.push(`/scentDetail${aroma.id}`)
            }}
            />
        ))}
        </View>
    </ScrollView>
    );
}
