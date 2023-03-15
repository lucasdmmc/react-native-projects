import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import { ButtonIconTypeStyleProps, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Icon 
        name={icon}
        type={type}
      />
    </TouchableOpacity>
  )
}