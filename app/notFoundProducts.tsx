import FormResponse from '../components/FormResponseCustom';
import { View } from 'react-native';
import sadFaceIcon from '../assets/sad-face-icon.png'; 

export default function notFoundProducts() {
    return (
        <View>
            <FormResponse
                text1='Ops...'
                image={sadFaceIcon} 
                text2='Sem Produtos no carrinho, adicione produtos para continuar com o pedido.'
                navigate='portfolio'
                navigateText='Produtos'
            />
        </View>
    );
}
