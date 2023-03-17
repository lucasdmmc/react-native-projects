import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { MealHeader } from "../../components/MealHeader";
import { useRoute } from "@react-navigation/native"

import { Container, Content, DateAndTime, DateAndTimeTitle, FoodDescription, FoodName, StatusContainer, StatusText, Status, ButtonContainer } from "./styles";
import { RouteParams } from "../../components/DayList";

export function Meal() {
  const { COLORS } = useTheme()

  const route = useRoute()

  const { name, date, diet, hour, description } = route.params as RouteParams

  return (
    <Container>
      <StatusBar
        backgroundColor={COLORS.GREEN_400} 
        barStyle="dark-content"
        translucent
      />

      <MealHeader title="Refeição"/>

      <Content>
        <FoodName>{name}</FoodName>
        <FoodDescription>{description}</FoodDescription>
        <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
        <DateAndTime>{date} às {hour}</DateAndTime>

        <StatusContainer>
          {
            !diet ? 
            <><Status statusColor="green"></Status><StatusText>dentro da dieta</StatusText></>
            :
            <><Status statusColor="red"></Status><StatusText>fora da dieta</StatusText></>
          }
        </StatusContainer>
        
        <ButtonContainer>
          <Button icon="edit" title="Editar refeição"/>
          <Button icon="delete"title="Excluir Refeição"/>
        </ButtonContainer>
      </Content>
    </Container>
  )
}