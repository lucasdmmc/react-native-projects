import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const TITLE_COLOR = {
  green: "GREEN-700",
  red: "RED-700",
} as const

type TitleProps = {
  titleColor: keyof typeof TITLE_COLOR
}


export const Title = styled.Text<TitleProps>`
  color: ${props => props.theme[TITLE_COLOR[props.titleColor]]};
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const TitleStrong = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
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
  text-align: center;
`;

export const Image = styled.Image`
  margin-bottom: 32px;
`;