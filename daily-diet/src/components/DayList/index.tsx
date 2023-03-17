import { Container, Date, Divider, FoodName, Hour, Meal, MealContent, Status } from "./styles" 
import { useNavigation } from "@react-navigation/native"

export type RouteParams = {
  name: string
  description: string
  date: string
  hour: string
  diet: boolean
}

export function DayList({ name, date, description, hour, diet }: RouteParams) {
  const { navigate } = useNavigation()

  function handleStatistics() {
    navigate("meal", { name, description, date, diet, hour})
  }

  return (
    <Container>

      <Date>{date}</Date>

      <Meal onPress={handleStatistics}>
        <MealContent>
          <Hour>{hour}</Hour>
          <Divider></Divider>
          <FoodName>{name}</FoodName>
        </MealContent>
        {
          !diet ?
          <Status statusColor="green"></Status>
          :
          <Status statusColor="red"></Status>

        } 
      </Meal>
    </Container>
  )
}