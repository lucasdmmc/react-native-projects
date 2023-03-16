import { ButtonIcon } from "../ButtonIcon";
import { Container, Title } from "./styles";

interface MealHeaderProps {
  title: string;
}

export function MealHeader({ title }: MealHeaderProps) {
  return (
    <Container>
      <ButtonIcon type="GRAY" icon="keyboard-backspace"/>
      <Title>{title}</Title>
    </Container>
  )
}