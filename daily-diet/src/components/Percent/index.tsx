import { Container, StatisticsStyleProps, Text, TextPercent } from "./styles";
import { TouchableOpacityProps } from "react-native"
import { ButtonIcon } from "../ButtonIcon";


type PercentProps = TouchableOpacityProps & {
  showBackButton?: boolean
  type?: StatisticsStyleProps 
}

export function Percent({ type = "PRIMARY", showBackButton = false}: PercentProps) {
  return (
    <Container type={type}>
      <TextPercent>90,86%</TextPercent>
      <Text>das refeições dentro da dieta</Text>

      { 
        showBackButton ? 
          <ButtonIcon style={{
            position: "absolute",
            left: 8,
            top: 8
          }} 
          icon={"keyboard-backspace"} 
          type={type}
          />
          
         : 

         <ButtonIcon 
          style={{
            position: "absolute",
            right: 8,
            top: 8
          }}
          icon={"call-made"} 
          type={type}
        />
      } 
    </Container>
  )
}