import styled, { css } from 'styled-components';

type ButtonStyleProps = {
  width: string
  bgColor?: string
  boxShadow?: boolean
}

export const Button = styled('button')<ButtonStyleProps>`
  padding: 0.8rem 2rem;
  max-width: ${({ width }) => width};
  width: 100%;
  background-color: ${({ bgColor, theme }) => (bgColor || theme.colors.primary)};
  color: ${({ bgColor }) => (bgColor ? '#000' : '#fff')};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.body.weight.default};
  font-family: ${({ theme }) => theme.body.font};
  border: none;
  border-radius: 2rem;
  ${({ boxShadow }) => (boxShadow ? css`
    box-shadow: 0.1rem 0.1rem 1rem rgba(0,0,0,0.2);
  ` : '')}
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    ${({ bgColor, theme }) => (bgColor ? css`
      background-color: hsla(0, 1%, 98%, 1);
    ` : css`
      background-color: hsl(327,90%,68%);
    `)}
  }

  &:active {
    ${({ bgColor }) => (bgColor ? css`
      background-color: hsla(0, 1%, 95%, 1);
    ` : css`
      background-color: hsl(327,95%,55%);
    `)}
  }
`;
