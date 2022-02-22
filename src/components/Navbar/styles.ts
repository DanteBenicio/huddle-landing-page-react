import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  height: 5rem;
  padding: 1rem 4rem;
  margin-bottom: -5rem;
  background: transparent;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem 1.5rem;
  }
`;

export const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    button {
      width: 200px;
      padding: 0.5rem 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    button {
      max-width: 150px;
      padding: 0.5rem 1rem;
    }
  }
`;

export const Logo = styled.img`
  height: 30px;

  @media screen and (max-width: 768px) {
    height: 20px;
  }

  @media screen and (max-width: 400px) {
    height: 15px;
  }
`;
