import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import ScentItemComponent from '../components/ScentItemComponent';
import { router } from 'expo-router';

const aromas = [
    { id: 0, titulo: "Cítricos", photo: "image1.png", description: "Frescor efervescente com notas ensolaradas" },
    { id: 1, titulo: "Adocicados", photo: "image2.png", description: "Deliciosamente doce com toques reconfortantes" },
    { id: 2, titulo: "Frutados", photo: "image3.png", description: "Vibrante e suculento, como um pomar em flor" },
    { id: 3, titulo: "Amadeirados", photo: "image3.png", description: "Profundo e acolhedor, com notas terrosas e quentes" },
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
            photo={aroma.photo}
            description={aroma.description} 
            onPress={() => {
                setScentId(aroma.id); 
                router.push('/productDetail')
            }}
            />
        ))}
        </View>
    </ScrollView>
    );
}
