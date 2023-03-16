import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_200};
  flex: 1;
`;

export const HeaderNewMeal = styled.View`
  flex-direction: row;
  gap: 82px;
`;

export const TextNewMeal = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`; 

export const Form = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px 24px;
`;

export const Date = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const Diet = styled.View`
  gap: 8px;
`;

export const TextDiet = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const FilterDiet = styled.View`
  flex-direction: row;
  gap: 8px;
`;