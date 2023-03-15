import { Container, ProfileImage } from "./styles";
import { Image, ImageSourcePropType } from "react-native"
import logoImg from "../../assets/logo.png"
import profileImg from "../../assets/profileimg.png"

export function Header() {
  return (
    <Container>
      <Image source={logoImg}/>
      <ProfileImage source={profileImg}/>
    </Container>
  )
}