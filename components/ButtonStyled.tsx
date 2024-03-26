import { Pressable,Text } from "@gluestack-ui/themed"

interface IButton {
    title: string
    color: string
    colorText: string
    borderColor: string
    onPress?: () => void
}

export default function ButtonStyled({title, color, colorText,borderColor,onPress}:IButton){
    return(        
        <Pressable
        onPress={onPress}
        style={{
            padding: 5,
            backgroundColor: color,
            borderRadius: 8, 
            width:"100%",
            borderColor: borderColor,
            borderWidth: 2
        }}>            
            <Text 
                color= {colorText} 
                textAlign="center"
                fontSize={22}
                fontWeight="900"
            >
                {title}
            </Text>

        </Pressable>
    )
}