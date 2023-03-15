import { Container, StatisticColorType, StatisticHeightType, Subtitle, Title } from "./styles";

type StatisticCardProps = {
  title: string
  subtitle: string
  type?: StatisticColorType
  heightType?: StatisticHeightType
}

export function StatisticCard({ heightType, type = "GRAY", title, subtitle, ...rest }: StatisticCardProps) {
  return (
    <Container heightType={heightType} type={type} {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}