import React from "react";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import TopicsScentComponent from "../components/TopicsPageComponent";
import TitleComponent from "../components/TitleComponent";
import SloganText from "../components/SloganText";

const dicas = [
    { id: 0, title: "Pense no ambiente", description: "Cada cômodo pede um aroma diferente. Para a sala de estar, experimente aromas aconchegantes como baunilha ou sândalo. Na cozinha, aromas cítricos como limão siciliano ou laranja doce trazem frescor. No quarto, lavanda ou camomila promovem relaxamento." },
    { id: 1, title: "Considere a sua personalidade", description: "Prefere aromas doces e frutados? Ou prefere algo mais herbal e refrescante? A escolha do aroma deve estar em sintonia com suas preferências e estilo." },
    { id: 2, title: "Confie na sua intuição", description: "No final, o mais importante é escolher um aroma que você goste e que te faça sentir bem." },
    { id: 3, title: "Leia as descrições dos aromas", description: "As descrições dos aromas podem te dar uma boa ideia do tipo de fragrância que você pode esperar." },
]

export default function TopicoAroma() {
    const imageUrl = require('../assets/index2.png');
    return (
        <ScrollView>
            <TitleComponent title={'Como escolher o aroma ideal?'}></TitleComponent>
            <SloganText text={'Bateu a dúvida do qual dos nossos aromas escolher? Relaxa, estamos aqui para te ajudar!'}></SloganText>
            <TopicsScentComponent
                imageUrl={imageUrl}
                intro={"Encontrar a fragrância perfeita para sua casa ou presente pode ser uma tarefa divertida e sensorial. Siga estas dicas e acerte na escolha:"}
                dicas={dicas}
                conclusion={"Com essas dicas, você está pronto para encontrar a vela aromática Arôme perfeita para iluminar e perfumar seu ambiente!"}
                link={"Confira os aromas disponíveis clicando no botão abaixo"}
                onPress={() => router.push(`/aromas`)}
            />
        </ScrollView>
    );
}