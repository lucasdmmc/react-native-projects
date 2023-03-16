import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { MealHeader } from "../../components/MealHeader";
import { Container, Content, DateAndTime, DateAndTimeTitle, FoodDescription, FoodName, StatusContainer, StatusText, Status, ButtonContainer } from "./styles";

export function Meal() {
  const { COLORS } = useTheme()
  return (
    <Container>
      <StatusBar
        backgroundColor={COLORS.GREEN_400} 
        barStyle="dark-content"
        translucent
      />

      <MealHeader title="Refeição"/>

      <Content>
        <FoodName>Sanduíche</FoodName>
        <FoodDescription>Sanduíche de pão integral com atum e salada de alface e tomate</FoodDescription>
        <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
        <DateAndTime>12/08/2022 às 16:00</DateAndTime>

        <StatusContainer>
          <Status statusColor="green"></Status>
          <StatusText>dentro da dieta</StatusText>
        </StatusContainer>
        
        <ButtonContainer>
          <Button icon="edit" title="Editar refeição"/>
          <Button icon="delete"title="Excluir Refeição"/>
        </ButtonContainer>
      </Content>
    </Container>
  )
}