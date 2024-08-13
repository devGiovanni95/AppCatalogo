import { Button } from "react-native";

interface StyledButtonProps {
    title: string
    onPress: () => void
    color?: string
}

export default function StyledButton({title, onPress, color}: StyledButtonProps){
    return(
        <Button
            title={title}
            color={color}
            onPress={onPress}
        />
    )
}