import React from "react";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import TopicsScent from "../components/TopicsPage";
import TitleComponent from "../components/TitleComponent";
import SloganText from "../components/SloganText";

const dicas = [
    { id: 0, title: "História e curiosidades", description: "As velas aromáticas existem há milhares de anos, e foram usadas por diversas culturas ao longo da história. Na China, eram usadas para fins medicinais e religiosos, enquanto no Egito Antigo tinham parte em rituais de purificação. Na Europa, ficaram populares no século XVII, sendo usadas para perfumar ambientes e afastar insetos." },
    { id: 1, title: "Benefícios das velas aromáticas", description: "Podem proporcionar diversos benefícios para a saúde física e mental, como redução do estresse e da ansiedade, melhora do humor, promoção do relaxamento e do sono, aumento da concentração e alívio de dores de cabeça e enxaquecas." },
]

export default function TopicoAroma() {
    const imageUrl = require('../assets/index3.png');
    return (

        <ScrollView>
            <TitleComponent title={'Segredo das velas aromáticas'}></TitleComponent>
            <SloganText text={'As velas aromáticas são muito mais do que apenas velas, confira algumas curiosidades sobre elas abaixo'}></SloganText>
            <TopicsScent
                imageUrl={imageUrl}
                intro={"As velas aromáticas são portadoras de aromas que transformam o ambiente, criando uma atmosfera relaxante, energizante ou aconchegante. Além disso, as velas aromáticas podem ser utilizadas para fins terapêuticos e até mesmo para rituais místicos."}
                dicas={dicas}
                conclusion={"Velas aromáticas são um presente perfeito para qualquer ocasião. Podem ser usadas para decorar a casa, criar um ambiente relaxante ou energizante, ou simplesmente para proporcionar um momento de bem-estar."}
                link={"Confira nosso catálogo de velas clicando no botão abaixo"}
                onPress={() => router.push(`/portfolio`)}
            />
        </ScrollView>
    );
}