import { useState } from "react"
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("")

  const { navigate } = useNavigation()

  async function handleNew() {
    try {

      await groupCreate(group);
      navigate("players", { group })
      
    } catch(error) {
      if(error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message)
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.")
        console.log(error)

      }
    }
  
  }
  return (
    <Container>
      <Header showBackButton/>

      <Content>
        <Icon />
        <Highlight 
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma"
          onChangeText={text => setGroup(text)}
        />

        <Button 
          title="Criar" 
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}