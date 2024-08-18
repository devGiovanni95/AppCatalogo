import { Center, Text } from "@gluestack-ui/themed";
import { TextInput, StyleSheet } from "react-native";

interface StyledInputProps {
    placeholder: string
    name: string
    value: string
    color: string
    onChangeText?: (text: string) => void
}

const getTextStyle = (color:any) => ({
    color: color || 'white', 
    fontSize: 14,
    padding:0,
    margin: 0,
    // Adicione mais propriedades de estilo conforme necessário
  });
  

export default function StyleInput({placeholder, onChangeText, name, value, color}: StyledInputProps){
    return(
        <>
            <Text style={styles.text}>{name}</Text>
            <Center>
                <TextInput                
                    style={[styles.input,{borderColor:color}]}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    value={value}
                    />
                    <Text style={getTextStyle(color)}>Campo obrigatório</Text>
            </Center>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        marginTop: 0,
        marginBottom: 0,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    text: {
        marginStart: '0%',
        marginTop: 0,
        fontWeight: "800",
        color: 'black'
    }
});