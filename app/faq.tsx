import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Text } from '@gluestack-ui/themed'
import Accordion from '../components/Accordion'
import DrawerComponent from '../components/DrawerComponent';
import { Slot } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

export default function Faq() {
    return(
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>F.A.Q</Text>
          <Accordion 
          title1={'Como prolongar a duração da sua vela'}
          text1={'Para prolongar a duração de sua vela aromática, certifique-se de deixá-la queimar completamente na primeira utilização, mantenha o pavio aparado a meio centímetro, evite correntes de ar e guarde-a com uma tampa adequada para protegê-la da poeira. Com esses cuidados simples, você poderá desfrutar de momentos românticos à luz de velas por mais tempo'}
          title2={'Como escolher a melhor opção de aroma'}
          text2={'Na escolha do aroma da vela, considere suas preferências e o ambiente desejado. Experimente diferentes fragrâncias para encontrar aquela que traga conforto e harmonia ao seu espaço. Com essa atenção aos detalhes, você pode selecionar a vela perfeita para complementar suas experiências.'}
          title3={'Benefícios ao utilizar uma vela aromática'}
          text3={'O uso de velas aromáticas oferece uma variedade de benefícios. Além de criar uma atmosfera acolhedora e relaxante, os aromas podem ajudar a reduzir o estresse, promover a concentração e melhorar o humor. Com uma vasta gama de fragrâncias disponíveis, as velas aromáticas podem ser personalizadas para se adequar a diferentes necessidades e preferências. Ao incorporá-las em sua rotina, você pode desfrutar de uma experiência sensorial elevada e um ambiente mais agradável em sua casa ou espaço de trabalho'}
          title4={'Qual a diferença entre uma vela comum e uma vela aromática ?'}
          text4={'Velas comuns são feitas apenas de cera e pavio, oferecendo luz. Já as velas aromáticas contêm óleos essenciais ou fragrâncias, proporcionando não apenas luz, mas também um aroma agradável que pode ter efeitos terapêuticos, como relaxamento ou revitalização. Em resumo, enquanto as velas comuns iluminam, as aromáticas também perfumam o ambiente, oferecendo uma experiência sensorial completa.'}
          title5={'Por que presentear alguém especial com velas aromáticas ?'}
          text5={'Presentear alguém especial com velas aromáticas vai além de um simples gesto. Essas velas oferecem uma experiência sensorial única, proporcionando não apenas luz, mas também um aroma envolvente que pode criar uma atmosfera acolhedora e relaxante. Além disso, os diferentes aromas podem evocar memórias, emoções e sensações, tornando o presente ainda mais pessoal e significativo. É uma maneira elegante de mostrar cuidado e atenção aos detalhes, proporcionando momentos de tranquilidade e bem-estar para quem recebe.'}
          title6={'Como velas aromáticas podem mudar o seu humor ?'}
          text6={'As velas aromáticas podem ser transformadoras quando se trata de mudar o nosso humor. Com fragrâncias cuidadosamente selecionadas, elas têm o poder de acalmar a mente, reduzir o estresse e criar uma sensação de conforto e bem-estar. Além disso, certos aromas têm propriedades terapêuticas conhecidas, como lavanda para relaxamento ou laranja para revigorar. Ao acender uma vela aromática, você pode transformar instantaneamente o ambiente ao seu redor, elevando o seu humor e promovendo uma sensação de equilíbrio e harmonia.'}/>
        </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo:{
    width: 100,
    height: 100
  },
  mainTitle: {
    color: '#7a5656',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20
    
  }
});
