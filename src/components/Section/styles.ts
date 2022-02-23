import styled from 'styled-components';

export const Container = styled('section')<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
  padding: 2rem 2.5rem;

  @media screen and (max-width: 768px) {
    ${({ incrementSpacingBottom }) => (incrementSpacingBottom ? css`
      padding: 2rem 1.5rem 15rem;
    ` : css`
      padding: 2rem 1.5rem;
    `)}
  }

  @media screen and (min-height: 1180px) {
    min-height: 50vh;
  }
`;

export const Wrapper = styled('main')<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ rowReverse }) => (rowReverse ? 'row-reverse' : 'row')};

  width: 100%;

  padding: 4rem 2rem;
  gap: 4rem;

  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const TextContent = styled.div``;

export const Title = styled.h2`
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: ${({ theme }) => theme.heading.weight});
  font-family: ${({ theme }) => theme.heading.font};
  color: ${({ theme }) => theme.colors.veryDarkCyan};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 3.5vw, 1.2rem);
  font-weight: ${({ theme }) => theme.body.weight.default};
  font-family: ${({ theme }) => theme.body.font};
  color: ${({ theme }) => theme.colors.grayishBlue};
  max-width: 550px;
`;

export const ImageWrapper = styled.div`
  max-width: 450px;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;
