import { useNavigation, useRoute } from "@react-navigation/native"
import { useState, useEffect } from "react"
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { DayList, RouteParams } from "../../components/DayList";
import { Header } from "../../components/Header";
import { Percent } from "../../components/Percent";
import { Container, Meals, MealsText } from "./styles";


export function Home() {
  const { navigate } = useNavigation()
  const [meal, setMeal] = useState({} as RouteParams)
  const [dayList, setDayList] = useState<RouteParams[]>([])
  const [newDayList, setNewDayList] = useState()

  const route = useRoute();

  function handleNewGroup() {
    navigate("new")
  }

  function showDayList() {
    const { name, date, hour, diet, description } = route.params as RouteParams
    setDayList(state => [...state, { name, date, hour, diet, description }])
    return
  }

  useEffect(() => {
    if(!route.params) return
    showDayList()

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

      <FlatList 
        data={dayList}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <DayList
            name={item.name}
            date={item.date} 
            hour={item.hour} 
            diet={item.diet} 
            description={item.description}
          />
        )}
        showsVerticalScrollIndicator={false}      
      />

    </Container>
  )
}