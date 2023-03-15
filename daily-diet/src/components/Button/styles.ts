import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled(TouchableOpacity)`
  background: ${({ theme }) => theme.COLORS.GRAY_600};
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
  flex: 1;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.WHITE
}))``;