// ConfirmationScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { CartContext } from '../hooks/cartItem';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { Divider, ScrollView } from '@gluestack-ui/themed';
import { Picker } from '@react-native-picker/picker';

export default function ConfirmationOrder() {

  const context = useContext(CartContext)
  if(!context){
      throw new Error('Aromas must be used within a CartProvider');
  }
  const { clearCart } = context;
  const { products, updateProductQuantity  } = context
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('credit_card'); 
  const [installments, setInstallments] = useState('1'); // Valor padrão para parcelas
  const [address, setAddress] = useState({
    address: '',
    district: '',
    state: '',
    country: ''
  })

  const handleInputChange = (name: string, value: string) => {
    setAddress((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(()=>{
    async function getUserAddress() {
      try {
          const userIdString = await SecureStore.getItem('userId');
          // Convertendo o valor de volta para um número (se for o caso)
          const userId = userIdString ? JSON.parse(userIdString) : null;
        // Faz a requisição GET para o endpoint especificado
        const response = await fetch(`https://api-catalogo-pi-1.onrender.com/user/address/${userId}`, {
          method: 'GET', // Define o método como GET
          headers: {
            'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
          },
        });
    
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`); // Lança um erro se a resposta não for bem-sucedida
        }
    
        // Converte a resposta em JSON
        const data = await response.json();
        console.log('Dados do endereço do usuário:', data);
        setAddress(data);
      } catch (error) {
        console.error('Erro ao buscar endereço do usuário:', error);
      }
    }

    getUserAddress()

    const newTotal = products.reduce((accum, item) => {
      return accum + (Number(item.price) * item.quantidade);
    }, 0);

    setTotal(newTotal);
  },[products])

const handleOrder = async () => {
  const url = 'https://api-catalogo-pi-1.onrender.com/order';
  let lack = false

  // Pegando o valor 
  const userIdString = await SecureStore.getItem('userId');
  // Convertendo o valor de volta para um número (se for o caso)
  const userId = userIdString ? JSON.parse(userIdString) : null;

  if(userId === null || userId === ''){
      return
  }

  // itens de produtos
  const orderItems = products.map(item => ({
      productId: item.id,
      quantity: item.quantidade,
      price: item.price
  }));
    
  console.log('order itens', orderItems)
  
  let method_pay = '';
  if(paymentMethod === 'Cartão de Crédito'){
    method_pay = paymentMethod + ' ' + installments
  } else{
    method_pay = paymentMethod
  }


  //adicionar quantas vezes
  const data = {
      userId: userId,  // Defina o userId conforme necessário
      status: "pending",
      method_payment: method_pay,  // Defina a forma de pagamento conforme necessário
      orderItems: orderItems,
      deliveryDetails: address
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
    //router.push('success');
    clearCart()
    router.push('orderlist');

  } catch (error) {

    console.error('Error:', error);
    router.push('unsuccess');

  }
};

  return (
    <ScrollView style={styles.general}>
      <Text style={styles.title}>Confirmar Pedido</Text>
      <Divider style={{marginBottom:20}}/>

      <Text style={{fontSize: 20,marginBottom:20, fontWeight: 'bold'}}>Endereço de entrega</Text>
      
      <Text style={styles.label}>Rua:</Text>
      <TextInput
        style={styles.input}
        value={address.address}
        onChangeText={(text) => handleInputChange('address', text)}
        placeholder="Digite o endereço"
      />

      <Text style={styles.label}>Bairro:</Text>
      <TextInput
        style={styles.input}
        value={address.district}
        onChangeText={(text) => handleInputChange('district', text)}
        placeholder="Digite o bairro"
      />

      <Text style={styles.label}>Estado:</Text>
      <TextInput
        style={styles.input}
        value={address.state}
        onChangeText={(text) => handleInputChange('state', text)}
        placeholder="Digite o estado"
      />

      <Divider style={{marginBottom:20}}/>

      <Text style={styles.label}>Método de Pagamento:</Text>
            <Picker
                selectedValue={paymentMethod}
                style={styles.picker}
                onValueChange={(item) => { setPaymentMethod(item)}}
            >
                <Picker.Item label="PIX" value="pix" />
                <Picker.Item label="Cartão de Crédito" value="credit_card" />
                <Picker.Item label="Cartão de Débito" value="debit_card" />
                <Picker.Item label="Boleto" value="boleto" />
                <Picker.Item label="Transferência Bancária" value="bank_transf"/>
            </Picker>

            {paymentMethod === 'Cartão de Crédito' && (
        <>
          <Text style={styles.label}>Número de Parcelas:</Text>
          <Picker
            selectedValue={installments}
            style={styles.picker}
            onValueChange={(itemValue) => setInstallments(itemValue)}
          >
            <Picker.Item label="1x" value="1" />
            <Picker.Item label="2x" value="2" />
            <Picker.Item label="3x" value="3" />
            <Picker.Item label="4x" value="4" />
            <Picker.Item label="5x" value="5" />
            <Picker.Item label="6x" value="6" />
          </Picker>

              { installments != '1' && (
                <Text style={styles.label}>{installments} Parcelas de R$ {(total / Number(installments)).toFixed(2) }</Text>
              )}
        </>
      )}

      <Text style={styles.subtitle}>Total do pedido R$ {total.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <View style={{marginBottom:10}}>
        <Button title="Confirmar" onPress={() => {handleOrder()}} />
        </View>
        <Button title="Cancelar" onPress={() => {router.replace('cart1')}} color="red" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  general :{
    marginTop: 10,
    padding:20
  },
  picker: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 18
  },
  label: {
    marginBottom: 10,
    fontSize: 18
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20
  },
  buttonContainer: {
    padding: 10,
    marginBottom:30
  }
});
