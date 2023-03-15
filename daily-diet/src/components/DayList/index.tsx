import { Container, Date, Divider, FoodName, Hour, Meal, MealContent, Status } from "./styles"

export function DayList() {
  return (
    <Container>
      <Date>12.08.22</Date>

      <Meal>
        <MealContent>
          <Hour>20:00</Hour>
          <Divider></Divider>
          <FoodName>X-tudo</FoodName>
        </MealContent> 
        <Status statusColor="green"></Status>
      </Meal>
      <Meal>
        <MealContent>
          <Hour>20:00</Hour>
          <Divider></Divider>
          <FoodName>X-tudo</FoodName>
        </MealContent> 
        <Status statusColor="red"></Status>
      </Meal>
      <Meal>
        <MealContent>
          <Hour>20:00</Hour>
          <Divider></Divider>
          <FoodName>X-tudo</FoodName>
        </MealContent> 
        <Status statusColor="red"></Status>
      </Meal>
      <Meal>
        <MealContent>
          <Hour>20:00</Hour>
          <Divider></Divider>
          <FoodName>X-tudo</FoodName>
        </MealContent> 
        <Status statusColor="red"></Status>
      </Meal>
    </Container>
  )
}