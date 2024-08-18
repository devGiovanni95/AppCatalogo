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

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const imageUrl = require('../assets/logo1.jpg');
  const handleLogin = () => {
      router.push('home')
  }
  const handleRegister = () => {
    router.push('register')
  }

  return (
    <View style={background.container}>
      <View style={container.container}>
        <ImageComponent imageUrl={imageUrl} />
        <StatusBar style="auto" />
        <View style={{width:'100%'}}>
          <StyledInput 
            placeholder='Digite seu Email'
            onChangeText={(texto) => console.log(texto)} 
            name={'Email'} 
            value={''}            
          />
          <StyledInput 
            placeholder='Digite sua senha'
            onChangeText={(texto) => console.log(texto)}
            name={'Senha'} 
            value={''}       
          />
        </View>
        <StyledButtonPressable
            onPress={handleLogin}
            title='Login'
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
});