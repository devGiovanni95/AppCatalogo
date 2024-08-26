import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledButtonPressable from '../components/LoginButtonPressable';
import { router } from 'expo-router';
import { Image } from 'react-native' 
import ImageComponent from '../components/ImageComponent1';
import { Center } from '@gluestack-ui/themed';
import { useState } from 'react';
import { setItemAsync } from 'expo-secure-store';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_email, setC_email] = useState('');
  const [c_password, setC_password] = useState('');
  const [loading, setLoading] = useState(false);
  const imageUrl = require('../assets/logo1.jpg');
  const [error, setError] = useState('');
  const handleRegister = () => {
    router.push('register')
  }

  const handleLogin = async () => {
    console.log('entrou')
    setLoading(true);
    setError('');

    try {
      let lack = false
        if(email == '' ){
          //setError('Preencha o campo email')
          setC_email('red')
          lack = true
        }
        if(password == ''){
          //setError('Preencha o campo senha')//
          setC_password('red')
          lack = true
        }
        if(lack == true){
          return
        }

        const response = await fetch('https://api-catalogo-pi-1.onrender.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        console.log("🚀 ~ handleLogin ~ data:", data)

        if (response.ok) {
          const address = {
            "address": data.address,
            "district": data.district,
            "city": data.city,
            "state": data.state,
            "country": data.country
          }

          setItemAsync('userId', JSON.stringify(data.user.id))
          setItemAsync('name', JSON.stringify(data.user.name))
          setItemAsync('address', JSON.stringify(address))
          setItemAsync('token', JSON.stringify(data.token))
          console.log('Login successful', data);
          router.push('home')
        } else {
            setError('Erro ao fazer o login');
        }
    } catch (error) {
      setError('Erro ao fazer o login')
        console.error('Error during login', error);
    } finally {
        setLoading(false);
    }
};

  return (
    <View style={background.container}>
      <View style={container.container}>
        <ImageComponent imageUrl={imageUrl} />
        <StatusBar style="auto" />
        <View style={{width:'100%'}}>
          <StyledInput 
            placeholder='Digite seu Email'
            onChangeText={(texto) => setEmail(texto)}
            name={'Email'}
            value={email} color={c_email}          />
          <StyledInput 
            placeholder='Digite sua senha'
            onChangeText={(texto) => setPassword(texto)}
            name={'Senha'}
            value={password} color={c_password}          />
        </View>
        {error ? <Text style={container.error}>{error}</Text> : null}
        <StyledButtonPressable
            onPress={handleLogin}
            title={loading ? 'Aguarde...' : 'Login'} 
        />
        <StyledButtonPressable
            onPress={handleRegister}
            title='Não sou cadastrado'
        />
      </View>
    </View>
  );
}

const background = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A5656',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const container = StyleSheet.create({
  container: {
    alignItems: 'center', // Alinha os itens horizontalmente à esquerda
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    height: '60%',
  },
  error: {
    color: 'red',
    marginBottom: 12,
    fontSize:16,

},
});