import FormResponse from '../components/FormResponseCustom';
import { View } from 'react-native';
import sadFaceIcon from '../assets/sad-face-icon.png'; 

export default function lackData() {
    return (
        <View>
            <FormResponse
                text1='Ops...'
                image={sadFaceIcon} 
                text2='Por Favor preencha com todos os seus dados'
                navigate='requestOrder'
                navigateText='Continuar preenchendo'
            />
        </View>
    );
}
