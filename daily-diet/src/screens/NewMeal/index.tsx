import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { RouteParams } from "../../components/DayList";
import { Filter } from "../../components/Filter";
import { Input } from "../../components/Input";
import { MealHeader } from "../../components/MealHeader";
import { Container, Form, HeaderNewMeal, Date, Diet, TextDiet, FilterDiet } from "./styles";

export function NewMeal() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [diet, setDiet] = useState(false)
  const [dayList, setDayList] = useState<RouteParams[]>([])


  const { navigate } = useNavigation()

  function handleNewMeal() {
    navigate("home", { name, description, date, hour, diet})
    setDayList(state => [...state, { name, description, date, hour, diet }])

    navigate("feedback", { diet })
  }

  function handleDietActive() {
    if(diet) {
      setDiet(false)
    } else {
      setDiet(true)
    }
  }

  useEffect(() => {}, [dayList])

  return (
    <Container>
      <HeaderNewMeal>
        <MealHeader title="Nova refeição"/>
      </HeaderNewMeal>

      <Form>
        <Input
          onChangeText={setName} 
          title="Name"
          value={name}
        />
        <Input
          onChangeText={setDescription} 
          title="Descrição"
          multiline
          numberOfLines={10}
          style={{ height: 120, textAlignVertical: 'top' }}
          value={description}
        />

        <Date>
          <Input
            onChangeText={setDate}
            title="Data"
            type="max-content"
            value={date}
          />
          <Input
            onChangeText={setHour}
            title="Hora"
            type="max-content"
            value={hour}
          />
        </Date>

        <Diet>
          <TextDiet>Está dentro da dieta?</TextDiet>
          <FilterDiet>
            {
              diet ?
                <>
                  <Filter
                    title="Sim"
                    onDietActive={!diet}
                    onPress={handleDietActive} 
                  />
                  <Filter
                   title="Não"
                    type="RED"
                    noDietActive={diet}
                    onPress={handleDietActive} 
                  />
                </>
              :
              <>
                <Filter
                  title="Sim"
                  onDietActive={!diet}
                  onPress={handleDietActive} 
                />
                <Filter
                  title="Não"
                  type="RED"
                  noDietActive={diet}
                  onPress={handleDietActive} 
                />
              </>
            }

          </FilterDiet>
        </Diet>
        <Button 
          title="Cadastrar Refeição"
          onPress={handleNewMeal}
        />
      </Form>
    </Container>
  )
}