import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import CartComponent from '../components/CartComponent';
import CartItem from '../components/CartItem';
import {CartContext, CartProvider} from '../hooks/cartItem';
import ButtonStyled from '../components/ButtonStyled';
// import { AsyncStorage } from 'expo-secure-store';
import * as SecureStore from 'expo-secure-store';

export default function Aromas() {

    const context = useContext(CartContext)
    if(!context){
        throw new Error('Aromas must be used within a CartProvider');
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [total, setTotal] = useState(0);
    const [scentId, setScentId] = useState(0);
    const [userId, setUserId] = useState();
    const [address, setAddress] = useState<null|string>()
    // const [data, setData] = useState(aromas)
    const { products, updateProductQuantity  } = context

    const handlePressRemove = (id: number) => {
        updateProductQuantity(id, -1);
    };

    const handlePressAdd = (id: number) => {
        updateProductQuantity(id, 1);
    };

    useEffect(() => {

        const fetchAddress = async () => {
            try {
                const userIdString = await SecureStore.getItem('userId');
                // Convertendo o valor de volta para um número (se for o caso)
                const userId = userIdString ? JSON.parse(userIdString) : null;
                setUserId(userId);
                const storedAddress = await SecureStore.getItemAsync('address');
                if (storedAddress) {
                    const parsedAddress = JSON.parse(storedAddress);
                    setAddress(parsedAddress);
                    console.log('Endereço salvo:', address);
                    console.log('Endereço recuperado:', parsedAddress);

                } else {
                    console.log('Endereço não encontrado');
                }
            } catch (error) {
                console.error('Erro ao buscar o endereço:', error);
            }
        };
    
        fetchAddress();
        // setTotal(0)
        // products.map((item) => {
        //     setTotal(total + (Number(item.price) * Number(item.quantidade)))
        // })
        // console.log('teste',SecureStore.getItem('address'))
        // setAddress(SecureStore.getItem('address'));
        const newTotal = products.reduce((accum, item) => {
            return accum + (Number(item.price) * item.quantidade);
        }, 0);

        setTotal(newTotal);
    },[products])
    // const handlePressRemove = (id: number) => {
    //     setData(prevData => 
    //         prevData.map(item => 
    //             item.id === id && item.quantidade > 0 
    //             ? { ...item, quantidade: item.quantidade - 1 } 
    //             : item
    //         )
    //     );
    // };

    // //adicionar funcionalidade que verifique a quantidade maxima de velas disponiveis
    // const handlePressAdd = (id: number) => {
    //     setData(prevData => 
    //         prevData.map(item => 
    //             item.id === id && item.quantidade >= 0 
    //             ? { ...item, quantidade: item.quantidade + 1 } 
    //             : item
    //         )
    //     );
    // };
    console.log('Total soma = ', total)
    console.log('Produtos', products)
    console.log('endereco', address)

    const handleOrder = async () => {
        const url = 'https://api-catalogo-pi.onrender.com/order';
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

        const data = {
            userId: userId,  // Defina o userId conforme necessário
            status: "pending",
            paymentMethod: "credit_card",  // Defina a forma de pagamento conforme necessário
            orderItems: orderItems
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
        } else {
            router.push('orderchat')
        }

        const result = await response.json();
        console.log('Success:', result);
        router.push('successRegister')
        } catch (error) {
        console.error('Error:', error);
        router.push('unsuccessRegister')
        }
    };


    return (

    <ScrollView>
        <CartComponent title={'Carrinho'}></CartComponent>
  
        <View style={{ alignItems: "center" }}>
            {products.map((aroma: { id: number; name: string; price: string; quantidade: number; image: string; }) => (
            <CartItem
            key={aroma.id}
            id={aroma.id}
            name={aroma.name}
            price={aroma.price} 
            quantidade={aroma.quantidade} 
            image={aroma.image}
            onPressAdd={() => {handlePressAdd(aroma.id)}}
            onPressRemove={() => {handlePressRemove(aroma.id)}}
            />
        ))}
        </View>

        <View style={{display:'flex', alignItems:'center', marginTop:15}}>
            <Text style={{fontSize:22, fontWeight:"700", color: '#7A5656'}}>
                {'SubTotal : R$ '} {total.toFixed(2)}
            </Text>
            <View style={{width: '90%', marginTop:15}}>
                 <ButtonStyled 
                    title={'Finalizar Pedido'} 
                    color={'#7A5656'} 
                    colorText={'white'} 
                    borderColor={'white'} 
                    onPress={() => setModalVisible(true)}
                    // onPress={()=>{handleOrder()}}
                />
            </View>
        </View>



                  {/* Modal de Confirmação */}
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ width: '80%', padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Confirmar Pedido</Text>
                    <Text style={{ marginBottom: 20, fontSize: 18 }}>Total do pedido R$ {total.toFixed(2)}</Text>

                    {/* Dados de endereço */}
                    <Text style={{ marginBottom: 20, fontSize: 18 }}> 
                        Rua: 
                        <Text> {userId}  </Text> 
                    </Text>

                    <Text style={{ marginBottom: 20, fontSize: 18 }}> 
                        Bairro: 
                        <Text>   </Text> 
                    </Text>

                    <Text style={{ marginBottom: 20, fontSize: 18 }}> 
                        Estado: 
                        <Text>   </Text> 
                    </Text>
                    
                    {/* <Text style={{ marginBottom: 20, fontSize: 18 }}> 
                        <Text>   </Text> 
                    </Text> */}

                    <View style={{ padding:10 }}>
                        <Button title="Confirmar" onPress={() => { setModalVisible(false); handleOrder(); }} />
                    </View>
                        <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
                </View>
            </View>
        </Modal>

    </ScrollView>

    );
}
