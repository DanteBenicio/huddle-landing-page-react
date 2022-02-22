import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  padding: 6rem 2.5rem 2rem;
  background-image: url(assets/bg-hero-desktop.svg);
  background-color: ${({ theme }) => theme.colors.veryPaleCyan};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 6rem 1.5rem 2rem;
  }
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const TextContent = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const ImageContent = styled.div`

  @media screen and (max-width: 768px) {

  }
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  font-family: ${({ theme }) => theme.heading.font};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.veryDarkCyan};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.body.font};
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.veryDarkCyan};
  margin-bottom: 1.5rem;
  max-width: 550px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const WrapperImage = styled.div`
  max-width: 700px;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;
