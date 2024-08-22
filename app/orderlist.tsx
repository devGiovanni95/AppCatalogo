import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const mockOrders = [
    {
      id: 1,
      order_number: "ORD-1692441015623",
      status: "pending",
      total: 109.97,
      paymentMethod: "credit_card",
      orderItems: [
        {
          productId: 1,
          productName: "Produto A",
          quantity: 2,
          price: 29.99,
        },
        {
          productId: 2,
          productName: "Produto B",
          quantity: 1,
          price: 49.99,
        },
      ],
    },
    {
      id: 2,
      order_number: "ORD-1692441023741",
      status: "completed",
      total: 79.98,
      paymentMethod: "paypal",
      orderItems: [
        {
          productId: 3,
          productName: "Produto C",
          quantity: 2,
          price: 39.99,
        },
      ],
    },
    {
      id: 3,
      order_number: "ORD-1692441038427",
      status: "shipped",
      total: 59.98,
      paymentMethod: "debit_card",
      orderItems: [
        {
          productId: 4,
          productName: "Produto D",
          quantity: 1,
          price: 59.98,
        },
      ],
    },
  ];

  
export default function OrderListScreen() {
  const [orders, setOrders] = useState(mockOrders);
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

  

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('https://sua-api.com/orders'); // URL da sua API
//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

  const renderOrder = ({ item }:any) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderNumber}>Pedido #{item.order_number}</Text>
      <Text style={styles.orderStatus}>Status: {item.status}</Text>
      <Text style={styles.orderTotal}>Total: R$ {item.total}</Text>
      <Text style={styles.paymentMethod}>Pagamento: {item.paymentMethod}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderItem: {
    padding: 16,
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
    fontSize: 14,
    color: '#555',
  },
  orderTotal: {
    fontSize: 14,
    color: '#555',
  },
  paymentMethod: {
    fontSize: 14,
    color: '#555',
  },
});
