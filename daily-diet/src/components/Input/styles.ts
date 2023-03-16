import styled, { css } from "styled-components/native";


export type InputType = "max-content"

type InputProps = {
  type?: InputType
}

export const Container = styled.View<InputProps>`
  gap: 4px;
  margin: 16px 0;
  ${({ type }) => type && css`
    flex: 1;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const TextInput = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  height: 48px;
  padding: 16px;
  border-radius: 6px;
  width: 100%;
`;

