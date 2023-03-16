import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type StatusColorType = "GREEN" | "RED"

type StatusProps = {
  type?: StatusColorType
}

export type FilterStyleProps = {
  onDietActive?: boolean
  noDietActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps> `
  background: ${({ theme }) => theme.COLORS.GRAY_300};

  ${({ theme, onDietActive }) => onDietActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
    background: ${theme.COLORS.GREEN_100};
  `}

  ${({ theme, noDietActive }) => noDietActive && css`
    border: 1px solid ${theme.COLORS.RED_700};
    background: ${theme.COLORS.RED_100};
  `}


  flex: 1;
  height: 50px;
  border-radius: 6px;
  gap: 8px;

  margin-bottom: 148px;

  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 10px;

  background: ${({ theme, type }) => type === "GREEN" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;