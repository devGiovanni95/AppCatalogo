import { View } from 'react-native';
import sadFaceIcon from '../assets/sad-face-icon.png';
import FormResponse from '../components/FormResponse';

export default function ErrorScreen() {
    return (
        <View>
            <FormResponse
                text1='Ops...'
                image={sadFaceIcon} 
                text2='Sem acesso a Internet.'
            />
        </View>
    );
}
