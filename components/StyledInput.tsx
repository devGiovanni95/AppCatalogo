import { TextInput, StyleSheet } from "react-native";

interface StyledInputProps {
    placeholder: string
    onChangeText?: (text: string) => void
}

export default function StyleInput({placeholder, onChangeText}: StyledInputProps){
    return(
        // crindo nosso componente
        <>
            <TextInput
                style={styles.input}//importando a nossa classe de estilização 
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </>
    )
}

// Pra estilizar os nossos componentes
const styles = StyleSheet.create({
    // funciona como classe do css e dentro dela passamos nossas estilizações
    input: {
        width: '100%',
        height: 40,
        marginTop: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
  });