import FormResponse from '../components/FormResponse';
import { View } from 'react-native';
import sadFaceIcon from '../assets/sad-face-icon.png'; 

export default function ErrorScreen() {
    return (
        <View>
            <FormResponse
                text1='Falha no cadastro..'
                image={sadFaceIcon} 
                text2='Pedimos desculpas pelo incoveniente. Esperamos que você possa ser cadastrar novamente mais tarde.'
            />
        </View>
    );
}
