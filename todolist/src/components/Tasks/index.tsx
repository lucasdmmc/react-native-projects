import { CheckboxChecked, Container, Content, styles } from "./styles";
import { useState } from "react"
import { Text, TextInputComponent, TouchableOpacity } from "react-native"
import { Checkbox } from "expo-checkbox";
import { Trash } from "phosphor-react-native";

interface Tasks {
  description: string
  finished: boolean
}

interface TasksProps {
  task: Tasks
  index: number
  onRemoveTask: (remove: string) => void;
  onChangeStatus: (checked: boolean, index: number) => void;
}

export function Tasks({ task, index, onRemoveTask, onChangeStatus }: TasksProps) {
  const [ isChecked, setChecked ] = useState(false)

  function handleStatusChecked(checked: boolean) {
    if(isChecked) {
      setChecked(false)
      onChangeStatus(checked, index)
    } else {
      setChecked(true)
      onChangeStatus(checked, index)
    }
  }
  
  return (
    <Container>
      <Content>
        {
          isChecked ? (
            <>
              <CheckboxChecked
                style={styles.checkbox}
                color="#5E60CE"
                value={isChecked}
                onValueChange={handleStatusChecked} 
              />
              <Text style={styles.textChecked}>
                {task.description}
              </Text>
            </>

          ) : (
            <>
              <Checkbox
                style={styles.checkbox}
                color="#4EA8DE"
                value={isChecked}
                onValueChange={handleStatusChecked} 
              />
              <Text style={styles.textTask}>
                {task.description}
              </Text>
            </>
          ) 
        }
      </Content>
      <TouchableOpacity onPress={() => onRemoveTask(task.description)}>
        <Trash size={20} color="#808080" />
      </TouchableOpacity>

    </Container>
  )
}