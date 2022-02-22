import Button from '../Button';
import {
  Container, Logo, Wrapper,
} from './styles';

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo src="assets/logo.svg" alt="logo writed huddle" />

        <Button bgColor="#fff" width="250px" text="Try it Free" boxShadow />
      </Wrapper>
    </Container>
  );
}
