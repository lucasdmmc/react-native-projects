import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Navigator, Screen } = createNativeStackNavigator();
import { Home } from "../screens/Home";
import { NewMeal } from "../screens/NewMeal";
import { Statistics } from "../screens/Statistics";
import { Meal } from "../screens/Meal";
import { EditMeal } from "../screens/EditMeal";
import { FeedBack } from "../screens/FeedBack";

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home}/>
      <Screen name="newmeal" component={NewMeal}/>
      <Screen name="Statistics" component={Statistics}/>
      <Screen name="Meal" component={Meal}/>
      <Screen name="editmeal" component={EditMeal}/>
      <Screen name="feedback" component={FeedBack}/>
    </Navigator>
  );
}