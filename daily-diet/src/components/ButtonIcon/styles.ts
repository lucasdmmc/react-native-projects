import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY" | "GRAY";

type Props = {
  type: ButtonIconTypeStyleProps
}

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" && theme.COLORS.GREEN_700 || 
  type === "GRAY" && theme.COLORS.GRAY_600 || 
  type === "SECONDARY" && theme.COLORS.RED_700
}))``;