import { ButtonIcon } from "../ButtonIcon";
import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native"

interface MealHeaderProps {
  title: string;
}

export function MealHeader({ title }: MealHeaderProps) {

  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate("home")
  }

  return (
    <Container>
      <ButtonIcon onPress={handleGoBack} type="GRAY" icon="keyboard-backspace"/>
      <Title>{title}</Title>
    </Container>
  )
}