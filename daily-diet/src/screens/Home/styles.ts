import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export const Meals = styled.View`
  margin-top: 40px;
  margin-bottom: 32px;
`;
export const MealsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 8px;
`;