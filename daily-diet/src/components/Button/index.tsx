import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"


type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function Button({ icon, title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon}/>}
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}