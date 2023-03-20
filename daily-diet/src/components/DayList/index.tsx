import { Container, Date, Divider, FoodName, Hour, Meal, MealContent, Status } from "./styles" 
import { useNavigation } from "@react-navigation/native"
import { FlatList } from "react-native"
import { useEffect, useState } from "react"

export type RouteParams = {
  name: string
  description: string
  date: string
  hour: string
  diet: boolean
}

export function DayList({ name, date, description, hour, diet }: RouteParams) {
  const { navigate } = useNavigation()
  const [dayList, setDayList] = useState<RouteParams[]>([])

  function handleStatistics() {
    navigate("meal", { name, description, date, diet, hour })
  }

  useEffect(() => {
    // setDayList(state => [...state, { name, description, date, diet, hour }])
  }, [])

  return (
    <Container>

      <Date>{date}</Date>

      {
        date &&

        <FlatList 
          data={dayList}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (

          <Meal onPress={handleStatistics}>
            <MealContent>
              <Hour>{item.hour}</Hour>
              <Divider></Divider>
              <FoodName>{item.name}</FoodName>
            </MealContent>
            {
              !item.diet ?
              <Status statusColor="green"></Status>
              :
              <Status statusColor="red"></Status>

            } 
          </Meal>
          )}
        />

      }

    </Container>
  )
}