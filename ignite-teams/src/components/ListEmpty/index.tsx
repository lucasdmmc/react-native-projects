import { UsersThree } from "phosphor-react-native";
import { Container, Icon, Message } from "./styles";

type Props = {
  message: string
}

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
      {/* <Icon /> */}
    </Container>
  )
}