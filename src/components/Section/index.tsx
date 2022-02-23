import {
  Container, Description, Image, ImageWrapper, TextContent, Title, Wrapper,
} from './styles';
import { SectionProps } from '../../types/section';

export default function Section({
  rowReverse, title, description, imageSrc, altImageText, incrementSpacingBottom,
}: SectionProps) {
  return (
    <Container incrementSpacingBottom={incrementSpacingBottom}>
      <Wrapper rowReverse={rowReverse}>
        <TextContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContent>
        <ImageWrapper>
          <Image src={imageSrc} alt={altImageText} />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}
