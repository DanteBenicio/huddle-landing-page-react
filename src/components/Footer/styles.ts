import { UIEvent } from 'react';
import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 100vw;
  min-height: 80vh;
  /* margin-top: 2rem; */
  padding: 8.5rem 2.5rem 2.5rem;
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.veryDarkCyan};
`;

export const FloatContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  z-index: 0;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 700px;
  width: 100%;
  height: 200px;

  background-color: #fff;
  border-radius: 0.5rem;

  @media screen and (max-width: 858px) {
    top: -15%;
  }

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }

  @media screen and (max-width: 550px) {
    max-width: 400px;
  }

  @media screen and (max-width: 440px) {
    max-width: 360px;
  }

  @media screen and (max-width: 400px) {
    max-width: 300px;
  }

  h2 {
    font-size: clamp(1rem, 3.5vw, 2rem);
    padding: 0 2rem;
    font-weight: ${({ theme }) => theme.heading.weight};
    font-family: ${({ theme }) => theme.heading.font};
    color: ${({ theme }) => theme.colors.veryDarkCyan};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 4rem;
  width: 100%;
  color: white;
  font-size: 1rem;
  height: 100%;
  font-family: ${({ theme }) => theme.body.font};

  @media screen and (max-width: 858px) {
    justify-content: center;
  }
`;

export const HuddleLocalAndContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
  width: 100%;
`;

export const Logo = styled.img`
  width: 200px;

  @media screen and (max-width: 858px) {
    align-self: center;
  }
`;

export const Local = styled.span`
  padding-left: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 25px;
    height: 25px;
    background-image: url(assets/icon-location.svg);
    background-repeat: no-repeat;
  }
`;

export const PhoneNumber = styled.span`
  padding-left: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-image: url(assets/icon-phone.svg);
    background-repeat: no-repeat;
  }
`;

export const EmailAddres = styled.span`
  padding-left: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-image: url(assets/icon-email.svg);
    background-repeat: no-repeat;
  }
`;

export const HuddleInformations = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 70%;
  max-width: 400px;
  width: 100%;
`;

export const HuddleList = styled.ul`
  display: grid;
  list-style: none;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  min-height: 200px;

  font-size: 1.1rem;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      /* height: 100%; */
      padding: 8%;

      &:hover {
        text-decoration: underline;
      }

      &:visited {
        color: #fff;
      }
    }
  }
`;

export const HuddleSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  min-height: 200px;
  max-width: 300px;
  width: 100%;
`;

export const HuddleSocialMediaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;

    transition: color 0.4s ease-in-out, border-color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Copy = styled.p`
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
`;
