import FormResponse from '../components/FormResponse';
import { View } from 'react-native';
import happyFaceIcon from '../assets/happy-face-icon.png';

export default function SuccessScreen() {
    return (
        <View>
            <FormResponse
                text1='Obrigado(a) por se cadastrar!'
                image={happyFaceIcon} // Passa diretamente o caminho da imagem
                text2='Aproveite ao máximo a nossa plataforma'
            />
        </View>
    );
}
