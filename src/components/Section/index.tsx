import {
  Container, Description, Image, ImageWrapper, TextContent, Title, Wrapper,
} from './styles';
import { SectionProps } from '../../types/section';

export default function Section({
  rowReverse, title, description, imageSrc, altImageText, incrementSpacingBottom,
}: SectionProps) {
  return (
    <Container>
      <Wrapper>
        <TextContent>
          <Title>Grow Together</Title>
          <Description>
            Generate meaningful discussions with your audience and build a strong, loyal community.
            Think of the insightful conversations you miss out on with a feedback form.
          </Description>
        </TextContent>
        <ImageWrapper>
          <Image src="assets/illustration-grow-together.svg" alt="" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}
