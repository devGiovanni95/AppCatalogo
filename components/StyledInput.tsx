import { Center, Text } from "@gluestack-ui/themed";
import { TextInput, StyleSheet } from "react-native";

interface StyledInputProps {
    placeholder: string
    name: string
    value: string
    onChangeText?: (text: string) => void
}

export default function StyleInput({placeholder, onChangeText, name, value}: StyledInputProps){
    return(
        <>
            <Text style={styles.text}>{name}</Text>
            <Center>
                <TextInput                
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    value={value}
                    />
            </Center>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        marginTop: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    text: {
        marginStart: '0%',
        marginTop: 8,
        fontWeight: "800",
        color: "black"
    }
});