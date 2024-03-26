import { Box, Button, Center, ScrollView, Text } from '@gluestack-ui/themed';
import FormResponse from '../components/FormResponse';
import { DrawerLayoutAndroid, StyleSheet} from 'react-native';
import StyledButton from '../components/StyledButton';
import StyleInput from '../components/StyledInput';
import { Link, router, useRouter } from 'expo-router';
import ButtonStyled from '../components/ButtonStyled';
import { useEffect, useRef, useState } from 'react';
import * as Location from 'expo-location';
import { useConnection } from './../hooks/connection'

export default function SuccessScreen() {
    const connection = useConnection()
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

    const success = useRef<DrawerLayoutAndroid>(null);
    const router = useRouter();

    const handleSuccess = () => {
        if(connection.isConnected === true){
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
          await reverseGeocode(currentLocation.coords.latitude, currentLocation.coords.longitude );
        })();
    }, []);

    const reverseGeocode = async (latitude: number, longitude: number) => {
        try{
            const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
                latitude: latitude,
                longitude: longitude
            })            
            const firstAddress = reverseGeocodedAddress[0];

            if(firstAddress){
                setCity(firstAddress.city)
                if(firstAddress.district){
                }
                
                setCidade(firstAddress.city + "")
                setBairro(firstAddress.subregion + "")
                setEndereco(firstAddress.street + " " +firstAddress.streetNumber)
                setEstado(firstAddress.region + "")
            }
        }catch(error){
            console.error(error)
        }
    }

  
    return (
        <ScrollView >
            <Center>
                <Text fontSize={24}>
                    Para encomendar o produto por favor informe seus dados nos campos abaixo:
                </Text>
            </Center>
            <Text>internet{connection.isConnected  ? 'Conectado' : 'Desconectado'}</Text>
            <StyleInput placeholder={'Digite seu Nome'} name='Nome' value={nome} onChangeText={setNome} />
            <StyleInput placeholder={'Digite seu Telefone'} name='Telefone' value={telefone} onChangeText={setTelefone} />
            <StyleInput placeholder={'Digite seu Endereço'} name='Endereço' value={endereco} onChangeText={setEndereco} />
            <StyleInput placeholder={'Digite seu Bairro'} name='Bairro' value={bairro} onChangeText={setBairro} />
            <StyleInput placeholder={'Digite seu Cidade'} name='Cidade' value={cidade} onChangeText={setCidade} />
            <StyleInput placeholder={'Digite seu Estado'} name='Estado' value={estado} onChangeText={setEstado} />
            <StyleInput placeholder={'Digite seu E-mail'} name='E-mail' value={email} onChangeText={setEmail} />

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


const styles = StyleSheet.create({
    button: {
        width: "90%",
        marginTop: 10
    },
})
