import { UsersThree } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  margin-bottom: 20px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300}
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 70,
  color: theme.COLORS.GREEN_700,
  weight: "fill"
}))``;