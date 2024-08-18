import React, { useRef } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import { Text } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

interface StyledButtonProps {
    text1: string;
    image: any;
    text2: string;
}

export default function FormResponse({ text1, image, text2 }: StyledButtonProps) {
    const success = useRef<DrawerLayoutAndroid>(null);
    const router = useRouter();

    const handleSuccess = () => {
        router.push('/');
        success.current?.closeDrawer();
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {text1}
                </Text>
                <Image
                    source={image} 
                    style={styles.image}
                />
                <Text style={styles.subtitle}>
                    {text2}
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSuccess}
                >
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#7a5656',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 150,
        width: '60%',
        textAlign: 'center',
    },
    subtitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        width: '90%',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 30
    },
    button: {
        backgroundColor: '#7a5656',
        marginTop: 80,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8,
        width: '90%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
