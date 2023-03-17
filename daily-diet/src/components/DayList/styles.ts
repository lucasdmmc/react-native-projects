import { TouchableOpacity } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  margin-top: 32px;
`

export const Date = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`

export const Meal = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 8px;

`;

export const MealContent = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.S}px;
  `}
`;

export const Divider = styled.View`
  height: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const FoodName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;


const STATUS_COLOR = {
  green: "GREEN-400",
  red: "RED-400" 
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.View<StatusProps>`
  border-radius: 50px;
  width: 16px;
  height: 16px;
  
  background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
`;