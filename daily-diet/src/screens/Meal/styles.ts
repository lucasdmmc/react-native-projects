import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.COLORS.GREEN_400};
  flex: 1;
`;

export const Content = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
`;

export const FoodName = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const FoodDescription = styled.Text`
  margin-bottom: 28px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const DateAndTimeTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const DateAndTime = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const StatusContainer = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  max-width: 144px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 8px 16px;
  gap: 8px;
  margin-bottom: 314px;
`;

export const StatusText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

const STATUS_PROPS = {
  green: "GREEN-700",
  red: "RED-700",	
} as const 

type StatusProps = {
  statusColor: keyof typeof STATUS_PROPS
}

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background: ${props => props.theme[STATUS_PROPS[props.statusColor]]};

`;

export const ButtonContainer = styled.View`
  gap: 9px;
`;

