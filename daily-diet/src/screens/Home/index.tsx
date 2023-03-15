import { Button } from "../../components/Button";
import { DayList } from "../../components/DayList";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Container, Meals, MealsText } from "./styles";


export function Home() {
  return (
    <Container> 
      <Header />

      <Percent />

      <Meals>
        <MealsText>Refeições</MealsText>
        <Button 
          title="Nova refeição" 
          icon="add"
        />
      </Meals>

      <DayList />
      <DayList />
    </Container>
  )
}