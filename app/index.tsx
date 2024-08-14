import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';

export default function RedirectScreen() {
  useEffect(() => {
    // Redireciona para a tela de login após 2 segundos (ou imediatamente)
    const timeoutId = setTimeout(() => {
      router.push('/login'); // Use a rota correta da tela de destino
    }, 500);

    // Limpa o timeout se o componente for desmontado antes do tempo acabar
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
};
