import { Box, Button, Center, ScrollView, Text, Alert, AlertIcon, AlertText, InfoIcon } from '@gluestack-ui/themed';
import { DrawerLayoutAndroid, StatusBar, StyleSheet } from 'react-native';
import { Link, router, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';
import NetInfo from '@react-native-community/netinfo';
import { useProduct } from '../hooks/productDetails';
import TitleComponent from '../components/TitleComponent';
import StyleInput from '../components/StyledInput';
import ProductItem from '../components/ProductItem';
import ButtonStyled from '../components/ButtonStyled';
import StyleInputPassword from '../components/StyledInputPassword';

export default function SuccessScreen() {
    const styles = StyleSheet.create({
        button: {
            width: "90%",
            marginTop: 10,
            marginBottom: 10
        },
    })

    const product = useProduct()
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [city, setCity] = useState<string | null>('')
    const [errorMsg, setErrorMsg] = useState('')
    const [nome, setNome] = useState('')
    const [colorPassword, setColorPassword] = useState('gray')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState<string>('')
    const [bairro, setBairro] = useState<string>('')
    const [cidade, setCidade] = useState<string>('')
    const [estado, setEstado] = useState<string>('')
    const [pais, setPais] = useState<string>('')
    const [showAlert, setShowAlert] = useState(false);

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

    const handleRegister = async () => {
        const url = 'https://api-catalogo-pi.onrender.com/user';
        if(password != confirmPassword){
            setColorPassword('red')
            return
        }
        console.log('entrou')
        const data = {
            name: nome,
            email: email,
            password: password,
            phone: telefone,
            address: endereco,
            district: bairro,
            city: cidade,
            state: estado,
            country: pais
        };
        console.log("🚀 ~ handleRegister ~ data:", data)
    
        try {
          const response = await fetch(url, {
            method: 'POST', // Método HTTP
            headers: {
              'Content-Type': 'application/json', // Tipo de conteúdo enviado
            },
            body: JSON.stringify(data) // Dados a serem enviados
          });
    
          console.log("🚀 ~ handleRegister ~ response:", response)
          if (!response.ok) {
            
            throw new Error('Network response was not ok.');
          }
    
          const result = await response.json();
          console.log('Success:', result);
          router.push('successRegister')
        } catch (error) {
          console.error('Error:', error);
          router.push('unsuccessRegister')
        }
      };

    const handleBack = () => {
        router.push('/')
        success.current?.closeDrawer()
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
        try {
            const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
                latitude: latitude,
                longitude: longitude
            })
            const firstAddress = reverseGeocodedAddress[0];
            if (firstAddress) {
                setCity(firstAddress.subregion)
                setCidade(firstAddress.subregion + "")
                setBairro(firstAddress.district + "")
                setEndereco(firstAddress.street + " " + firstAddress.streetNumber)
                setEstado(firstAddress.region + "")
                setPais(firstAddress.country + "")
            }
        } catch (error) {
            console.error(error)
        }
    }

        return (
            <ScrollView padding={20} marginBottom={50} height={'100%'}>
                <Center>
                    <Text fontSize={24} fontWeight={'800'} color='#7A5656' >
                        Cadastro
                    </Text>
                </Center>
                <StyleInput placeholder={'Digite seu Nome'} name='Nome' value={nome} onChangeText={setNome} />
                <StyleInput placeholder={'Digite seu Endereço'} name='Endereço' value={endereco} onChangeText={setEndereco} />
                <StyleInput placeholder={'Digite seu Bairro'} name='Bairro' value={bairro} onChangeText={setBairro} />
                <StyleInput placeholder={'Digite seu Cidade'} name='Cidade' value={cidade} onChangeText={setCidade} />
                <StyleInput placeholder={'Digite seu Estado'} name='Estado' value={estado} onChangeText={setEstado} />
                <StyleInput placeholder={'Digite seu Pais'} name='Pais' value={pais} onChangeText={setPais} />
                <StyleInput placeholder={'Digite seu Telefone'} name='Telefone' value={telefone} onChangeText={setTelefone} />
                <StyleInput placeholder={'Digite seu E-mail'} name='E-mail' value={email} onChangeText={setEmail} />
                <StyleInputPassword placeholder={'Digite sua senha'} name='Senha' value={password} onChangeText={setPassword} colormg={colorPassword} />
                <StyleInputPassword placeholder={'Digite novamente sua senha'} name='Confirme sua senha' value={confirmPassword} onChangeText={setConfirmPassword} colormg={colorPassword} />

                <Center>
                    {showAlert && (
                        <Alert mx="$5" action="error" variant="outline">
                            <AlertIcon as={InfoIcon} mr="$3" />
                            <AlertText>Por favor preencha todos os campos!</AlertText>
                        </Alert>
                    )}
                </Center>

                <Center style={{marginBottom:20}}>
                    <Box style={styles.button} >
                        <ButtonStyled
                            onPress={() => handleRegister()}
                            color='#7A5656'
                            title='Cadastrar'
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

