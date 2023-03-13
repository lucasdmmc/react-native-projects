
import { View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native"

import styled from "styled-components"

export const Container = styled(View)`
  padding: 24px;
  align-items: center;
  background: #0D0D0D;
  max-height: 153px;
  position: relative;
  z-index: 1;
`

export const Logo = styled(Image)`
  margin-top: 25px;
`

export const Form = styled(View)`
  flex-direction: row;
  gap: 4px;
  margin-top: 40px;
`

export const Input = styled(TextInput)`
  padding: 16px;
  height: 54px;
  flex: 1;
  background: #262626;
  border-radius: 6px;
  color: #808080;
`

export const Button = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: #1E6F9F;
  border-radius: 6px;
`

export const Main = styled(View)`
  background: #1A1A1A;
  flex: 1;
  width: 100%;
  position: relative;
  z-index: -1;
  padding: 40px 24px 24px 24px;

`

export const InformationAboutTask = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid white;
`

export const Created = styled(View)`
  flex-direction: row;
  gap: 8px;
`
export const Finished = styled(View)`
  flex-direction: row;
  gap: 8px;
`

export const WithoutTasks = styled(View)`
  align-items: center;
  border-top: 1px solid;
`

export const styles = StyleSheet.create({
  createdTask: {
    fontWeight: 'bold',
    color: "#4EA8DE"
  },
  finishedTask: {
    color: "#8284FA",
    fontWeight: 'bold',
  },
  quantityTasks: {
    fontWeight: 'bold',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 50,
    backgroundColor: "#333333",
    color: "#FFF"
  },
  textTask: {
    fontSize: 14,
    color: "#F2F2F2",
    maxWidth: 260,
    lineHeight: 20
  },
  withoutTasksContent: {
    marginTop: 40,
    alignItems: 'center',
  },
  notTasksText: {
    fontWeight: 'bold',
    color: "#808080",
    marginTop: 16,
  }

})