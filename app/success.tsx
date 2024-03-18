import FormResponse from '../components/FormResponse';
import { View } from 'react-native';
import happyFaceIcon from '../assets/happy-face-icon.png';

export default function SuccessScreen() {
    return (
        <View>
            <FormResponse
                text1='Obrigado(a) por encomendar conosco!'
                image={happyFaceIcon} // Passa diretamente o caminho da imagem
                text2='Esperamos que você possa aproveitar nossos produtos ao máximo!'
            />
        </View>
    );
}
