import styled, { css } from "styled-components/native";

export type StatisticColorType = "GRAY" | "GREEN" | "RED"
export type StatisticHeightType = "NORMAL" | "LARGER"

type StatisticProps = {
  type: StatisticColorType
  heightType?: StatisticHeightType
}

export const Container = styled.View<StatisticProps>`
  height: 89px;
  margin-bottom: 12px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${({ heightType }) => heightType && css`
      height: 107px;
      min-width: 166px;
      max-width: 166px;
      padding: 16px;
  `};

  background: ${({ theme, type }) => 
    type === "GRAY" && theme.COLORS.GRAY_300 || 
    type === "GREEN" && theme.COLORS.GREEN_400 || 
    type === "RED" && theme.COLORS.RED_400};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;