import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Status, StatusColorType, Text } from "./styles";

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  title: string
  type?: StatusColorType
}

export function Filter({ noDietActive = false, onDietActive = false, type = "GREEN", title, ...rest }: FilterProps) {
  return (
    <Container 
      {...rest} 
      onDietActive={ onDietActive }
      noDietActive={ noDietActive } 
    >
      <Status type={type}></Status>
      <Text>{title}</Text>
    </Container>
  )
}