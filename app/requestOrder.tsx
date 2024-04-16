import { Box, Button, Center, ScrollView, Text } from '@gluestack-ui/themed';
import { DrawerLayoutAndroid, StatusBar, StyleSheet} from 'react-native';
import StyleInput from '../components/StyledInput';
import { Link, router, useRouter } from 'expo-router';
import ButtonStyled from '../components/ButtonStyled';
import { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';
import NetInfo from '@react-native-community/netinfo';
import ProductItemComponent from '../components/ProductItemComponent';
import { useProduct } from '../hooks/productDetails';
import ProductDetails from './productDetail';
import TitleComponent from '../components/TitleComponent';

export default function SuccessScreen() {

    const styles = StyleSheet.create({
        button: {
            width: "90%",
            marginTop: 10
        },
    })
    
    const product = useProduct()
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [city, setCity] = useState<string | null >('');
    const [errorMsg, setErrorMsg] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    const [email, setEmail] = useState('');

    interface IProductItem {
        id: number,
        name: string,
        price: number,
        photo1: string,
        promotion: boolean,
        description: string

    }

    const [productDetail, setProductDetail] = useState<IProductItem | null>(null); // Estado para armazenar os detalhes do produto
    useEffect(() => {
        if (product.productId) {
            fetch(`https://api-catalogo-pi.onrender.com/product/${product.productId.id}`)
                .then(response => response.json())
                .then(json => setProductDetail(json))
                .catch(error => console.error('Erro ao carregar os detalhes do produto:', product.productId.id));
        }
    }, [product.productId]);




    const [isConnected, setIsConnected] = useState<boolean | null>(false);

    const updateConnectionStatus = (status: boolean | null) => {
        setIsConnected(status ?? false);
    };
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });

        NetInfo.fetch().then((state) => {
            setIsConnected(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, [isConnected]);

    const success = useRef<DrawerLayoutAndroid>(null);
    const router = useRouter();

    const handleSuccess = () => {
        if(isConnected === true){
            router.push('/success');
            success.current?.closeDrawer();
        }else{
            router.push('/lackInternet');
            success.current?.closeDrawer();
        }
    };

    const handleBack = () => {
        router.push('/');
        success.current?.closeDrawer();
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            await reverseGeocode(currentLocation.coords.latitude, currentLocation.coords.longitude);
        })();
    }, [isConnected]);
    const reverseGeocode = async (latitude: number, longitude: number) => {
        try{
            const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
                latitude: latitude,
                longitude: longitude
            })            
            const firstAddress = reverseGeocodedAddress[0];
            // console.log("🚀 ~ reverseGeocode ~ firstAddress:", firstAddress)
            if(firstAddress){
                setCity(firstAddress.subregion)     
                setCidade(firstAddress.subregion + "")
                setBairro(firstAddress.district + "")
                setEndereco(firstAddress.street + " " +firstAddress.streetNumber)
                setEstado(firstAddress.region + "")
            }
        }catch(error){
            console.error(error)
        }
    }

  
    if (!productDetail) {
        return <TitleComponent title="Carregando..." />;
    } else {
        return (
            <ScrollView >
                <Center>
                    <Text fontSize={24}>
                        Para encomendar o produto por favor informe seus dados nos campos abaixo:
                    </Text>
                </Center>
                <StyleInput placeholder={'Digite seu Nome'} name='Nome' value={nome} onChangeText={setNome} />
                <StyleInput placeholder={'Digite seu Telefone'} name='Telefone' value={telefone} onChangeText={setTelefone} />
                <StyleInput placeholder={'Digite seu Endereço'} name='Endereço' value={endereco} onChangeText={setEndereco} />
                <StyleInput placeholder={'Digite seu Bairro'} name='Bairro' value={bairro} onChangeText={setBairro} />
                <StyleInput placeholder={'Digite seu Cidade'} name='Cidade' value={cidade} onChangeText={setCidade} />
                <StyleInput placeholder={'Digite seu Estado'} name='Estado' value={estado} onChangeText={setEstado} />
                <StyleInput placeholder={'Digite seu E-mail'} name='E-mail' value={email} onChangeText={setEmail} />

                <Center>
                    <Text style={{
                        fontWeight: "800",
                        fontSize: 24,
                        marginBottom: 8,
                        marginTop: 16
                    }}>Produto</Text>
                    <ProductItemComponent
                        id={productDetail.id}
                        name={productDetail.name}
                        price={'R$ ' + productDetail.price.toFixed(2)}
                        photo={productDetail.photo1}
                        promotion={productDetail.promotion}
                        onPress={() => {
                            product.setProductId({ id: productDetail.id })
                            router.push('/productDetail')
                        }} />

                </Center>

                <Center>
                    <Box style={styles.button} >
                        <ButtonStyled
                            onPress={() => handleSuccess()}
                            color='#7A5656'
                            title='Enviar'
                            colorText='white'
                            borderColor='#7A5656'
                            />
                </Box>

                <Box style={styles.button}>
                        <ButtonStyled 
                        onPress={() => handleBack()}
                            color='white'
                            title='Cancelar'
                            colorText='#7A5656'
                            borderColor='#7A5656'
                        />
                </Box>
            </Center>

        </ScrollView>
    );
}


}
