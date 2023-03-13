
import { 
  Button,
  Container,
  Created,
  Finished,
  Form,
  InformationAboutTask,
  Input,
  Logo,
  Main,
  styles, 
  WithoutTasks} from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { Text, FlatList, Alert, View, Image } from "react-native";
import { Tasks } from "../../components/Tasks";
import { useEffect, useRef, useState } from "react"

export interface TasksProps {
  description: string
  finished: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState({} as TasksProps)
  const [finishedTaskCount, setFinishedTaskCount] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  function handleAddTask() {
    const alreadyExistsTask = tasks
    .find(task => task.description === newTask.description)
  
    
    if(alreadyExistsTask) {
      return Alert
      .alert("Você não pôde adicionar uma tarefa", 
      "Finalize a sua tarefa existante para poder adicionar outra igual")
    }
    
    if(!newTask.description){
      return Alert
      .alert("Campo vazio", "Digite qual tafera você deseja adicionar")
    }

    setTasks(state => [...state, newTask])
    setNewTask({} as TasksProps)
  }

  function handleStatusChecked(checked: boolean, index: number) {
    let copyTasks = [...tasks];
    let copyTask = { ...copyTasks[index] };

    copyTask.finished = checked;
    copyTasks[index] = copyTask;

    setTasks(copyTasks);
  }

  function handleRemoveTask(remove: string, index: number) {
    if(!tasks[index].finished) {
      return Alert.alert("Tarefa não finalizada", "Finalize a tarefa antes de remover")
    }
    Alert.alert("Remover", "Deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () => setTasks(state => state
          .filter(task => task.description !== remove)),
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])


  }

  useEffect(() => {
    const finishedTaskCount = tasks.filter(task => task.finished)
    setFinishedTaskCount(finishedTaskCount.length)
  }, [tasks])

  return (
    <>
      <Container>
        <Logo source={require("../../../assets/logo.png")} />
        <Form>
          <Input
            onChangeText={(task) => setNewTask({...newTask, description: task})}
            value={newTask.description}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            style={{ borderWidth: isFocused ? 1 : 0 , borderColor: "#5E60CE"}}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button onPress={handleAddTask}>
            <PlusCircle size={20} color="#fff" />
          </Button>
        </Form>
      </Container>
      <>
        <Main>
          <InformationAboutTask>
            <Created>
              <Text style={styles.createdTask}>Criadas</Text>
              <Text style={styles.quantityTasks}>{tasks.length}</Text>
            </Created>
            <Finished>
              <Text style={styles.finishedTask}>Concluídas</Text>
              <Text style={styles.quantityTasks}>{finishedTaskCount}</Text>
            </Finished>
          </InformationAboutTask>

          <FlatList 
            data={tasks}
            keyExtractor={item => item.description}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Tasks
                key={item.description}
                task={item}
                index={index}
                onChangeStatus={handleStatusChecked}
                onRemoveTask={() => handleRemoveTask(item.description, index)}
              />
            )}
            ListEmptyComponent={() => (
              <WithoutTasks>
                <View style={styles.withoutTasksContent}>
                  <Image source={require("../../../assets/clipboard.png")}/>
                  <Text style={styles.notTasksText}>Você ainda não tem tarefas cadastradas</Text>
                  <Text style={{ color: "#808080" }}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
              </WithoutTasks>
            )}
          />
        </Main>
      </>
    </>
  )
}