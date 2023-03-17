import { Container, Subtitle, Title, TitleStyleType, Image } from "./styles";
import successImg from "../../assets/success.png"
import fail from "../../assets/fail.png"
import { Button } from "../Button";
import { useNavigation, useRoute } from "@react-navigation/native"
import { RouteParams } from "../DayList";


interface FeedBackBothProps {
  title: string
  subtitle?: string
  type?: TitleStyleType
}

export function FeedBackBoth({ type = "GREEN", subtitle, title }: FeedBackBothProps) {

  const { navigate } = useNavigation();

  const route = useRoute()

  const { diet } = route.params

  function handleGoHome() {
    navigate("home")
  }


  return (
    <Container >
      <Title type={type}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      {!diet ?  <Image source={successImg} /> : <Image source={fail} />}

      <Button onPress={handleGoHome} title="Ir para a página incial"/>
    </Container>
  )
}