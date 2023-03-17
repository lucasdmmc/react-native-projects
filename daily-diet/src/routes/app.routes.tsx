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
    <Navigator screenOptions={{ headerShown: false, }}>
      <Screen name="home" component={Home}/>
      <Screen name="new" component={NewMeal}/>
      <Screen name="feedback" component={FeedBack}/>
      <Screen name="statistics" component={Statistics}/>
      <Screen name="meal" component={Meal}/>
      <Screen name="edit" component={EditMeal}/>
    </Navigator>
  );
}