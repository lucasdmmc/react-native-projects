import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import { Checkbox } from "expo-checkbox";


export const Container = styled(View)`
  width: 100%;
  height: 64px;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  background: #262626;
  padding: 12px 8px 12px 12px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  border: 1px solid #333333;

`

export const Content = styled(View)`
  max-width: 235px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export const CheckboxChecked = styled(Checkbox)`
  width: 20px;
  height: 20px;
  border: 4px;
`

export const styles = StyleSheet.create({
  checkbox: {
    borderRadius: 10,
    backgroundColor: "#000"
  },
  textTask: {
    fontSize: 14,
    color: "#F2F2F2",
    maxWidth: 260,
    lineHeight: 20,
  },
  textChecked: {
    textDecorationLine: "line-through",
    color: "#808080",
    fontSize: 14,
  }
})