import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import Stepper from '../components/OrderProgress';
import OrderProgress from '../components/OrderProgress';


  interface OrderItem {
    price: number;
    quantity: number;
  }

export default function OrderListScreen() {

  const steps = [
    { label: 'Recebido', status: 'pending' },
    { label: 'Em Preparação', status: 'preparation' },
    { label: 'Em rota de entrega', status: 'delivering' },
    { label: 'Entregue', status: 'delivered' },
  ];




  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(false);

   useEffect(() => { 

    const fetchOrders = async () => {
      try {
        const response = await fetch('https://api-catalogo-pi-1.onrender.com/order');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
      fetchOrders();
   }, []);

  function sumProducts(products:any){
    const newTotal = products.reduce((accum: number, item: { price: any; quantidade: number; }) => {
      return accum + (Number(item.price) * item.quantidade);
    }, 0);
  }



const calculateTotal = (orderItems: OrderItem[]): number => {
  return orderItems.reduce((accum: number, item: OrderItem) => {
    return accum + (item.price * item.quantity);
  }, 0);
};

  const renderOrder = ({ item }:any) => {
    const total = calculateTotal(item.orderItems);
    let currentStepIndex = 0 
    if(item.status == 'pending'){
      currentStepIndex = 0
    }else if(item.status == 'preparation'){
      currentStepIndex = 1
    }else if(item.status == 'delivering'){
      currentStepIndex = 2
    }else if(item.status == 'delivered'){
      currentStepIndex = 3
    }else{
      currentStepIndex = 4
    }
    return (

      <View style={styles.orderItem}>
      <Text style={styles.orderNumber}>Pedido #{item.order_number}</Text>
      <Text style={styles.orderStatus}>Status: {item.status}</Text>
      <Text style={styles.orderTotal}>Total: R$ {total.toFixed(2)}</Text>
      <Text style={styles.paymentMethod}>Pagamento: {item.method_payment}</Text>
      <OrderProgress steps={steps} currentStepIndex={currentStepIndex}/>

    </View>
    )
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrder}
      />
        <View style={styles.container}>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderItem: {
    padding: 18,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderStatus: {
    fontSize: 16,
    color: '#555',
  },
  orderTotal: {
    fontSize: 16,
    color: '#555',
  },
  paymentMethod: {
    fontSize: 16,
    color: '#555',
  },
});
