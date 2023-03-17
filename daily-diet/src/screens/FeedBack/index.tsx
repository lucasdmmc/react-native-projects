import { Fragment } from "react";
import { useNavigation, useRoute } from "@react-navigation/native"

import { Container, Image, Subtitle, Title, TitleStrong } from "./styles";
import successImg from "../../assets/success.png"
import fail from "../../assets/fail.png"
import { Button } from "../../components/Button";


type RouteParams = {
  diet: boolean
}

export function FeedBack() {

  const { navigate } = useNavigation();

  const route = useRoute()

  const { diet } = route.params as RouteParams

  function handleGoHome() {
    navigate("home", {} as any)
  }

  return (
    <Container>
      {
        !diet ?
        <>
          <Title titleColor="green">Continue assim!</Title>
          <Subtitle>Você continua <TitleStrong>dentro da dieta</TitleStrong>. Muito bem</Subtitle>
          <Image source={successImg} />
        </>
        :
        <>
          <Title titleColor="red">Que pena!</Title>
          <Subtitle>Você <TitleStrong>saiu da dieta</TitleStrong> dessa vez, mas continue se esforçando e não desista!</Subtitle>
          <Image source={fail} />
        </>
      }
      

      <Button onPress={handleGoHome} title="Ir para a página incial"/>

    </Container>
  )
}