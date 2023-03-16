import { TextInputProps } from "react-native";
import { Container, InputType, Text, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  title: string
  type?: InputType
}

export function Input({ type, title, ...rest }: InputProps) {
  return (
    <Container type={type}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </Container>
  )
}