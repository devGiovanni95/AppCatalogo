import { Center, Text } from "@gluestack-ui/themed";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';

interface StyledPasswordInputProps {
    placeholder: string;
    name: string;
    value: string;
    colormg: string;
    onChangeText?: (text: string) => void;
}

export default function StyleInputPassword({
    placeholder,
    onChangeText,
    name,
    value,
    colormg
}: StyledPasswordInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <>
            <Text style={styles.text}>{name}</Text>
            <Center>
                <View style={[styles.inputContainer, { borderColor: colormg}]}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        value={value}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
                        <MaterialIcons name={isPasswordVisible ? 'visibility' : 'visibility-off'} size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </Center>
        </>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        color: 'gray',
        padding: 10,
        height:40
    },
    input: {
        flex: 1,
        height: 40,
        marginEnd: 10,
    },
    text: {
        marginStart: '0%',
        marginTop: 8,
        fontWeight: "800",
        color: "black"
    },
    icon: {
        padding: 8,
    }
});
