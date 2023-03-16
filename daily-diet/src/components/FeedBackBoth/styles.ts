import styled, { css } from "styled-components/native";

export type TitleStyleType = "GREEN" | "RED"

type TitleProps = {
  type?: TitleStyleType
}

export const Container = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, type }) => 
  type === "GREEN" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 8px;
  margin-bottom: 40px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Image = styled.Image`
  margin-bottom: 32px;
`;