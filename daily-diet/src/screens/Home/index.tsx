import { useNavigation, useRoute } from "@react-navigation/native"
import { useState, useEffect } from "react"
import { Button } from "../../components/Button";
import { DayList, RouteParams } from "../../components/DayList";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Container, Meals, MealsText } from "./styles";


export function Home() {
  const { navigate } = useNavigation()
  const [meal, setMeal] = useState({} as RouteParams)

  const route = useRoute();

  function handleNewGroup() {
    navigate("new")
  }

  useEffect(() => {
    if(!route.params) return

    const { name, date, hour, diet, description } = route.params as RouteParams
    setMeal({ name, date, hour, diet, description })

  }, [route.params])
  return (
    <Container> 
      <Header />

      <Percent />

      <Meals>
        <MealsText>Refeições</MealsText>
        <Button 
          title="Nova refeição" 
          icon="add"
          onPress={handleNewGroup}
        />
      </Meals>

      <DayList
        name={meal.name} 
        date={meal.date} 
        hour={meal.hour} 
        diet={meal.diet} 
        description={meal.description}
      />
    </Container>
  )
}