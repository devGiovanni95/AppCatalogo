import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/StyledInput';
import StyledButton from '../components/StyledButton';
import StyledButtonPressable from '../components/LoginButtonPressable';
import { router } from 'expo-router';
import { Image } from 'react-native' 
import ImageComponent from '../components/ImageComponent1';

export default function Login() {
  const imageUrl = require('../assets/logo1.jpg');
    const handleLogin = () => {
        router.push('home')
    }
  return (
    <View style={background.container}>
        <View style={container.container}>
       <ImageComponent imageUrl={imageUrl}/>
        <StatusBar style="auto" />
        <Text>Usuário</Text>
        <StyledInput 
            placeholder='Digite seu Usuário'
            onChangeText={ (texto)=> console.log(texto) }
            />
        <Text>Senha</Text>
        <StyledInput 
            placeholder='Digite sua senha'
            onChangeText={ (texto)=> console.log(texto) }
        />

        <StyledButtonPressable
            onPress={handleLogin}
            title='Login'

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
    alignItems: 'flex-start', // Alinha os itens horizontalmente à esquerda
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    height: '60%',
  },
});
