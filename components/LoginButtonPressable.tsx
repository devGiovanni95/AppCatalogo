import { Pressable, StyleSheet, Text  } from "react-native";

interface StyledButtonPressableProps {
    title: string
    onPress: () => void
    color?: string
}

export default function StyledButtonPressable({title, onPress, color}: StyledButtonPressableProps){
    return(
        // crindo nosso componente
        <>
            <Pressable 
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7A5656',
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 12, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        marginTop: 8
    },
    text: {
        fontSize: 24,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    
})