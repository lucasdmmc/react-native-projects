import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: -3px;
  flex: 1;

  background: ${({ theme }) => theme.COLORS.GREEN_400};
   
`;

export const Content = styled.View`
  padding: 33px 24px;
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Text = styled.Text`
  text-align: center;
  margin-bottom: 23px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const InDietOrNot = styled.View`
  flex-direction: row;
  gap: 12px;
`;