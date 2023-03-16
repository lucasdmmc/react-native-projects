import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  gap: 100px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;