import { Container, Subtitle, Title, TitleStyleType, Image } from "./styles";
import successImg from "../../assets/success.png"
import { Button } from "../Button";


interface FeedBackBothProps {
  title: string
  subtitle?: string
  type?: TitleStyleType
}

export function FeedBackBoth({ type = "GREEN", subtitle, title }: FeedBackBothProps) {
  return (
    <Container >
      <Title type={type}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Image source={successImg} />

      <Button title="Ir para a página incial"/>
    </Container>
  )
}