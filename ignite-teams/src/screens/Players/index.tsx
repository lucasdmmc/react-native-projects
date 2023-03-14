import { useState, useEffect, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native"
import { FlatList, TextInput } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";
import { Highlight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { Filter } from "@components/Filter"
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { AppError } from "@utils/AppError";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroups";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/Loading";

type RouteParams = {
  group: string;
}
export function Players() {
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [team, setTeam] = useState("Time A")

  const route = useRoute();
  const { group } = route.params as RouteParams

  const { navigate } = useNavigation()

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if(newPlayerName.trim().length === 0) {
      return Alert.alert("Nova pessoa", "Informe o nome da pessoa para adicionar")
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName("")
      fetchPlayersByTeam();
    } catch(error) {
      if(error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message)
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar")
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)

      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)

      setIsLoading(false)

    } catch(error) {
      console.log(error)
      Alert.alert("Pessoas", "Não foi possível carregar as pessoas do time selecionado")
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch(error) {
      Alert.alert("Remover Pessoa", "Não foi possível remover a pessoa selecionada")
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigate("groups")
    } catch (error) {
      Alert.alert("Remover grupo", "Não foi possível remover o grupo")
    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      "Remover",
      "Deseja remover o gropo?",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => groupRemove() }
      ]
    )
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])
  return (
    <Container>
      <Header showBackButton/>

      <Highlight 
        title={group}
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon 
          icon="add" 
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>
    
    {
      isLoading ? <Loading /> :
      <FlatList 
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && {flex: 1}
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Não há pessoas nesse time"
          />
        )}
      />
    }
      <Button
        onPress={handleGroupRemove}
        title="Remover turma"
        type="SECONDARY"
      />
    </Container>
  )
}