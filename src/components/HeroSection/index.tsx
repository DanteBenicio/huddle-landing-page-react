import Button from '../Button';
import {
  Container, Description, Title, Wrapper, WrapperImage, Image, TextContent, ImageContent,
} from './styles';

export default function Section() {
  return (
    <Container>
      <Wrapper>
        <TextContent>
          <Title>Build The Community Your Fans Will Love</Title>
          <Description>
            Huddle re-imagines the way we build communities.
            You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </Description>
          <Button text="Get Started For Free" width="350px" />
        </TextContent>
        <ImageContent>
          <WrapperImage>
            <Image src="assets/illustration-mockups.svg" alt="illustration mockups" />
          </WrapperImage>
        </ImageContent>
      </Wrapper>
    </Container>
  );
}
