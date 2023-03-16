import { Percent } from "../../components/Percent";
import { Container, Content, InDietOrNot, Text } from "./styles";
import { StatusBar } from "react-native"
import { useTheme } from "styled-components/native";
import { StatisticCard } from "../../components/StatisticCard";
import { StatisticsStyleProps } from "../../components/Percent/styles";

type StatisticsProps = {
  type?: StatisticsStyleProps
}


export function Statistics({ type = "PRIMARY" }: StatisticsProps) {
  const { COLORS } = useTheme()
  return (
    <Container type="PRIMARY">

      {
        type &&
        <StatusBar 
          backgroundColor={COLORS.GREEN_400}
          barStyle="dark-content"
          translucent
        />
      }

      
      {
        !type &&
        <StatusBar 
          backgroundColor={COLORS.RED_400}
          barStyle="dark-content"
          translucent
        />
      }
      <Percent showBackButton type="PRIMARY"/>

      <Content>
        <Text>Estatísticas gerais</Text>

        <StatisticCard
          title="22" 
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard
          title="109" 
          subtitle="refeições registradas"
        />

        <InDietOrNot>
          <StatisticCard
            heightType="LARGER"
            type="GREEN" 
            title="99"
            subtitle="refeições dentro da dieta "
          /> 
          <StatisticCard
            heightType="LARGER"
            type="RED"
            title="10"
            subtitle="refeições fora da dieta"
          /> 
        </InDietOrNot>
      </Content>
    </Container>
  )
}