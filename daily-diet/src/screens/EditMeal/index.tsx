import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Input } from "../../components/Input";
import { MealHeader } from "../../components/MealHeader";
import { Container, Form, HeaderNewMeal, TextNewMeal, Date, Diet, TextDiet, FilterDiet } from "./styles";

export function EditMeal() {
  const [onDietActive, setOnDietActive] = useState(true)
  const [inDietActive, setInDietActive] = useState(false)

  function handleMark() {
    if(onDietActive) {
      setOnDietActive(true)
      setInDietActive(true)
    } else {
      setInDietActive(false)
      setOnDietActive(false)
    }
  }
  useEffect(() => {

  }, [])
  return (
    <Container>
      <HeaderNewMeal>
        <MealHeader title="Editar refeição"/>
      </HeaderNewMeal>

      <Form>
        <Input title="Name"/>
        <Input 
          title="Descrição"
          multiline
          numberOfLines={10}
          style={{ height: 120, textAlignVertical: 'top' }}
        />

        <Date>
          <Input title="Data" type="max-content"/>
          <Input title="Hora" type="max-content"/>
        </Date>

        <Diet>
          <TextDiet>Está dentro da dieta?</TextDiet>
          <FilterDiet>
            <Filter 
              title="Sim" 
              onDietActive={onDietActive}
              onPress={handleMark}
            />
            <Filter 
              title="Não" 
              type="RED" 
              noDietActive={inDietActive} 
              onPress={handleMark}
            />
          </FilterDiet>
        </Diet>
        <Button title="Salvar alterações"/>
      </Form>
    </Container>
  )
}