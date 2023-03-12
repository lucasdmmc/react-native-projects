import { Plus } from "phosphor-react-native";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleAddParticipant() {
    const alreadyExistsParticipant = participants.find(participant => participant === participantName)
    
    if(alreadyExistsParticipant){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome.")
    }

    if(participantName === "") {
      return 
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(item => item !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])  

    console.log(`Removeu ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>
        Sábado, 11 de Março de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
         />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Você ainda não chamou ninguém para o evento? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
