import styled, { css } from "styled-components/native";

export type StatisticsStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
  type: StatisticsStyleProps
}

export const Container = styled.View<Props>`
  width: 100%;
  min-height: 107px;
  border-radius: 2px;
  margin-top: 31px;
  padding: 20px 16px;
  position: relative;
  align-items: center;

  background: ${({ theme, type }) => 
    type === "PRIMARY" ? theme.COLORS.GREEN_400 : theme.COLORS.RED_400
  };
`;

export const TextPercent = styled.Text`
  line-height: 42px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;